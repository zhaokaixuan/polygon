
import "./pb"
import mk from "@Lib/mk";

// --------------------
// 整体算法复杂度高
// --------------------

/**
 * 将集合中的复合多边形，转成成单多边形
 * @param {arr} intersectedFeatures 图形集合
 */
const simplifyMultiPolygon = function (intersectedFeatures) {
  let partsOfMutilsPolygon = []
  intersectedFeatures.forEach(feature => {
    if (feature.geometry.geometryType === mk.Geometry.MULTI_POLYGON) {
      const parts = feature.geometry.convertToPolygons()
      partsOfMutilsPolygon = [...parts, ...partsOfMutilsPolygon]
    } else {
      partsOfMutilsPolygon.push(feature.geometry)
    }
  })

  return partsOfMutilsPolygon
}

/**
 * 图形相交检测
 * @param {*} geometry 
 * @param {*} features 
 * @param {*} excludeIds 
 */
const getIntersectedGeometry = function(geometry, features, excludeIds) {
  var filters = features.filter((feature) =>
    feature.geometry.id !== geometry.id &&
    !excludeIds.includes(feature.geometry.id) &&
    mk.intersects(geometry, feature.geometry)
  )

  return filters
}

/**
 * 转化成 polybool 格式
 * @param {*} geometry 
 */
const polybool = function(geometry) {
  const coords = geometry.getCoordinates()[0]
  const poly1 = {
    regions: [
      coords
    ],
    inverted: false
  }

  return poly1
}

/**
 * 将polybool格式转换成mk结构体
 * @param {*} regions 
 * @param {*} isMulti 
 */
const unPolybool = function (regions, isMulti = false) {
  const geometryCollection = []

  if (isMulti === false) {
    regions.forEach(re => {
      const polygon = new mk.Polygon()
      re.push(re[0])
      polygon.setCoordinates([re])

      geometryCollection.push(polygon)
    })
  } else {
    const mutilPolygon = new mk.MutilPolygon()
    const coordinates = []
    regions.forEach(re => {
      re.push(re[0])
      coordinates.push([re])
    })

    mutilPolygon.setCoordinates(coordinates)
    geometryCollection.push(mutilPolygon)
  }

  return geometryCollection
}

/**
 * 内切时，需要将内切图形合并
 * @param {*} holeFeatures 
 */
const simplifyBeforeHoleCutting = function (holeFeatures) {

  // 先简化复合多边形，
  holeFeatures = simplifyMultiPolygon(holeFeatures)
  if (holeFeatures.length <= 1) {
    return holeFeatures
  }

  // 执行图形合并操作。
  // union方法会自动判断相交，并做合并运算
  const polyboolFn = polybool
  const unionFn = PolyBool.union

  let unionPoly = polyboolFn(holeFeatures[0])
  for(let i = 1, len = holeFeatures.length; i < len; i ++) {
    const cp = holeFeatures[i]
    unionPoly = unionFn(unionPoly, polyboolFn(cp))
  }

  // 格式转换
  const result = unPolybool(unionPoly.regions)

  return result.length > 0 ? result : holeFeatures
}

/**
 * 切割多边形
 * 如果多边形被切割成多部分，是形成复合多边形的
 * @param {mk.Feature} feature
 * @param {Array} features 
 */
export function cutPolygon (feature, features, mutilPolygon = true) {
  // feature = feature.clone()
  if (feature === null || feature === undefined ||
      features === null || features === undefined) {
    return []
  }

  if (Array.isArray(features)) {
    if (features.length === 0) {
      return []
    }
  }

  // console.log('-----------------------')
  // console.log('计算包含关系')

  const containsFn = mk.contains
  let holeFeatures = features.filter(f => {
    if (feature.id !== f.id) {
      return containsFn(feature.geometry, f.geometry)
    }
  })

  // 相交判断，去掉内含的情况
  const excludeIds = []
  holeFeatures.forEach(f => {
    excludeIds.push(f.geometry.id)
  })
  
  // console.log('计算相交关系')
  
  // 相交判断，不应该判断内含的情况，照成不必要的判断
  // @TODO 优化相交判断算法，将内含情况排除
  let intersectedFeatures = getIntersectedGeometry(feature.geometry, 
    features, excludeIds)

  // console.log('简化复合多边形')
  intersectedFeatures = simplifyMultiPolygon(intersectedFeatures)

  const cutedFeatures = []
  let cutedPolygon = null

  // 1、开始边切
  if(intersectedFeatures.length > 0) {
    // console.log('开始边切')

    const polyboolFn = polybool
    let becutedGeometry = polyboolFn(feature.geometry)
 
    // 循环切割
    intersectedFeatures.forEach(geometry => {
      const theGeometry = polyboolFn(geometry)
      becutedGeometry = PolyBool.difference(becutedGeometry, theGeometry)
    })
    
    const regions = becutedGeometry.regions
    const regionsLen = regions.length

    if (regionsLen === 0) {
      // console.log('无实际边切操作')
      return []
    }
    // 切割成单多边形
    else if (regionsLen === 1) {
      const geometryCollection = unPolybool(regions, false)
      cutedPolygon = geometryCollection[0]
    }
    // 切割成复合多边形
    else {
      const geometryCollection = unPolybool(regions, true)
      cutedPolygon = geometryCollection[0]
    }
  } else {
    // console.log("无边切操作")
  }

  // 2.内切
  if (holeFeatures.length > 0) {
    // console.log('开始内切')

    const polygonWithHoleFn = mk.polygonWithHole
    let polyWithhole = cutedPolygon || feature.geometry

    holeFeatures = simplifyBeforeHoleCutting(holeFeatures)

    // 需要判断洞相交的情况，以及复合多边形的情况
    holeFeatures.forEach(f => {
      let geometry = null
      if (f.geometry === undefined) {
        geometry = f
      } else {
        geometry = f.geometry
      }
      
      polyWithhole = polygonWithHoleFn(polyWithhole, geometry)
    })

    cutedPolygon = polyWithhole
  }

  if (cutedPolygon !== null) {
    cutedFeatures.push(new mk.Feature(cutedPolygon))
  }
  
  return cutedFeatures
}

export default {
  cutPolygon
}
