
const MapUtil = {}

MapUtil.changeFeatureColor = (mk, mapManager, feature, qualified, needRender = true) => {
  const color1 = [0, 255, 0]
  const color2 = [255, 0, 0]

  let color
  if (qualified === "1") {
    color = color1
  } else {
    color = color2
  }

  const geometryType = feature.geometry.geometryType
  if (geometryType == mk.Geometry.POLYGON ||
      geometryType == mk.Geometry.EXTENT || 
      geometryType == mk.Geometry.ROTATABLE_EXTENT) {
    if (feature.style.length > 1) {
      feature.style[1].borderStyle.color = color;
    } else {
      feature.style[0].borderStyle.color = color;
    }
  } else if (geometryType == mk.Geometry.LINE) {
    if (feature.style.length > 1) {
      feature.style[1].color = color;
    } else {
      feature.style[0].color = color;
    }
  }

  if (needRender) {
    mapManager.map.render()
  }
}

/**
     * 计算当前地图缩放比例尺
     * @param  {[type]} map [description]
     * @return {[type]}     [description]
     */
MapUtil.getScalePercentage = (map) => {
  const view = map.view;
  const resolution = (1 / view.resolution).toFixed(2);
  const scalePercentage = resolution * 100;
  return scalePercentage;
},


MapUtil.disableCanvasRightMenus = () => {
  const canvas = document.getElementsByTagName("canvas")[0];
  const wrap = document.getElementById("wrap")

  wrap.oncontextmenu = canvas.oncontextmenu = function (ev) {
    wrap.style.left = ev.clientX + "px";
    wrap.style.top = ev.clientY + "px";
    wrap.style.display = "block";
    ev.preventDefault();
  }

  wrap.onclick = canvas.onclick = function () {
    wrap.style.display = "none";
  }
}


MapUtil.isNewFeature = (feature) => {
  if (feature.displayText === undefined) {
    return true;
  }

  return false;
}

MapUtil.calculateResolutions = (mapId, extent) => {
  const dom = document.getElementById(mapId);
  const width = dom.clientWidth;
  const height = dom.clientHeight;

  if (width <= 0 || height <= 0) {
    return null
  }

  let w = extent[2];
  let h = extent[3];

  let originWidth = w;

  if (w > width || h > height) {
    while (w > width || h > height) {
      w = w * 0.9;
      h = h * 0.9;
    }
  } else {
    while (w < width && h < height) {
      w = w * 1.04;
      h = h * 1.04;
    }

    w = w / 1.04;
    h = h / 1.04;
  }

  const resolution = originWidth / w;
  const fullResolution = resolution;

  const before = [];
  const scaleRate = 1.8;
  let temp = resolution;

  for (let i = 0; i < 2; i++) {
    temp = temp * scaleRate;
    before.push(temp);
  }

  const after = [];
  temp = resolution;
  for (let i = 0; i < 10; i++) {
    temp = temp / scaleRate;
    after.push(temp);
  }

  before.push(resolution);
  let resolutions = [...after, ...before];
  resolutions = resolutions.sort(function (a, b) {
    return b - a;
  });

  return {
    resolutions,
    resolution: fullResolution
  };
}

export default MapUtil