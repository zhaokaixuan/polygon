
import mk from "@Lib/mk";

export function findDeepPolygon(features) {
  const containsFn = mk.contains
  let count = 0
  const results = []
  for (let i = 0, len = features.length; i < len; i++) {
    const tfeature = features[i]

    for (let j = 0; j < len; j++) {
      const cFeature = features[j]
      if (cFeature.id !== tfeature.id) {
        if (containsFn(cFeature.geometry, tfeature.geometry)) {
          count++
        } else {
          count = 0
          break
        }
      }
    }

    if (count > 0) {
      results.push(tfeature)
      count = 0
    }
  }

  return results
}

export function paintPolygon(feature, styleConfig) {
  if (feature == null ||
      feature == undefined ||
      feature.geometry == null) {
    return
  }

  if (styleConfig == null || styleConfig == undefined) {
    return
  }

  if (styleConfig == null) {
    return
  }

  const colors = styleConfig
  const white = [Number(colors.r), Number(colors.g), Number(colors.b)]
  const blue = [0, 153, 255]
  const fillStyle = new mk.FillStyle(white, new mk.LineStyle(white, 1, 1), 0.6)

  feature.style = [fillStyle]
  if (feature.has('_originStyle')) {
    feature.set('_originStyle', [fillStyle])
  }
}

export default {
  findDeepPolygon,
  paintPolygon
}