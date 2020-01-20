
import "./pb"
import mk from "@Lib/mk";

function getIntersectFeatures(feature, targetLayer) {
  var allFeatures = targetLayer.features
  var results = []

  for (var i = 0, len = allFeatures.length; i < len; i++) {
    var fet = allFeatures[i]
    if (fet.id === feature.id ||
      fet.geometry.geometryType === mk.Geometry.POINT) {
      continue
    }

    var extent1 = fet.geometry.extent
    var extent2 = feature.geometry.extent
    var extetnArr1 = [extent1.xmin, extent1.ymin, extent1.xmax, extent1.ymax]
    var extetnArr2 = [extent2.xmin, extent2.ymin, extent2.xmax, extent2.ymax]

    if (mk.ExtentUtil.intersects(extetnArr1, extetnArr2)) {
      results.push(fet)
    }
  }

  return results
}

export function cutHoles(feature, featureLayer) {
  var arr = getIntersectFeatures(feature, featureLayer)
  if (arr.length === 0) {
    return [];
  }

  var firstGeometry = arr[0].geometry
  if (firstGeometry.geometryType === mk.Geometry.POLYGON) {
    var afterGeometry = mk.polygonWithHole(firstGeometry, feature.geometry)
    arr[0].geometry = afterGeometry;
    return arr;
  }else{
    return []
  }
}
export default {
  cutHoles
}