<template>
  <div class='map-container'>
    <div id='map'></div>
    <popup v-show="formFlag" @submit="popupSubmit" @cancel="popupCancel"></popup>
  </div>
</template>

<script>
import mk from "@Lib/mk";
import popup from "./popup";
import MapUtil from "@Utils/map/mapUtil";
import result from "../../../data";
import { findDeepPolygon, paintPolygon } from "@Utils/map/polygonUtil";
let mapManager = {
  map: null,
  flayer: null,
  drawTool: null,
  modifyTool: null,
  measureDrawTool: null,
  measureLayer: null,
  selectTool: null,
  overlay: null,
  currentFeature: null,
  drawingFeature: null,
  fullExtentResolution: null
};
export default {
  components: {
    popup,
  },
  props: {},
  data() {
    return {
      formFlag: false,
    };
  },
  watch: {},
  computed: {},
  methods: {
    init() {
      const self = this;
      let data = result;
      this.getImgObj(data.url).then(imgObj => {
        let markResult = data.markResult;
        let initParams = {
          dom: "map",
          markResult: markResult,
          url: imgObj.url,
          extent: [0, 0, imgObj.imageWidth, imgObj.imageHeight]
        };
        self.initMap(initParams);
      });
    },
    initMap(options) {
      const resolutionObj = MapUtil.calculateResolutions(
        options.dom,
        options.extent
      );

      const flayer = new mk.FeatureLayer();
      this.setupMarkResult(options.markResult, flayer);

      const overlay = new mk.Overlay({
        element: document.getElementById("popup"),
        autoPan: true
      });
      const imageLayer = new mk.SingleImageLayer({
        url: options.url,
        imageExtent: options.extent,
        projection: {
          extent: options.extent
        }
      });
      const view = new mk.View({
        projection: {
          extent: options.extent
        },
        center: mk.ExtentUtil.getCenter(options.extent),
        resolution: resolutionObj.resolution,
        resolutions: resolutionObj.resolutions
      });
      const map = new mk.Map({
        layers: [imageLayer, flayer],
        overlays: [overlay],
        controls: [],
        target: options.dom,
        view: view
      });
      mapManager.map = map;
      mapManager.flayer = flayer;
      mapManager.overlay = overlay;
      mapManager.fullExtentResolution = resolutionObj.resolution;
      // 初始化矩形绘制工具、标尺工具、图形选择工具
      this.setupDrawTool(map, flayer);
      this.setupSelectTool(map);
      this.setupModifyTool(map);
    },
    getImgObj(url) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = e => {
          const imageWidth = img.width;
          const imageHeight = img.height;
          const res = {
            url: img.src,
            imageWidth,
            imageHeight
          };
          resolve(res);
        };

        img.onerror = e => {
          reject(e);
        };
      });
    },
    setupMarkResult(markResult, flayer) {
      if (markResult === null) {
        return;
      }
      let features = mk.GeoJSON.read(JSON.parse(markResult));
      if (features == undefined) {
        return;
      }
      flayer.addFeatures(features);
    },
    /**
     * 初始化多边形绘制工具
     * @param  {[type]} map [description]
     * @return {[type]}     [description]
     */
    setupDrawTool(map, flayer) {
      // 绘图工具
      const drawTool = new mk.Draw({
        type: "polygon",
        drawLayer: flayer,
        finishCondition: evt => event.keyCode === 13,
        undoCondition: evt => false
      });
      map.addComponents(drawTool);

      drawTool.addEventListener(mk.DrawEvent.EventType.DRAW_START, e => {
        this.formVisible = false;
        mapManager.selectTool.active = false;
        mapManager.modifyTool.active = false;
        mapManager.currentFeature = null;
      });

      // 绘制完毕
      drawTool.addEventListener(mk.DrawEvent.EventType.DRAW_END, e => {
        this.onDrawEnd(e.feature);
      });

      mapManager.drawTool = drawTool;
    },
    /**
     * 初始化图形选择工具
     * @param  {[type]} map [description]
     * @return {[type]}     [description]
     */
    setupSelectTool(map) {
      const select = new mk.Select({
        selectMode: mk.BrowserEvent.CLICK
      });

      select.addEventListener(mk.SelectEvent.EventType.SELECT, evt => {
        const selectedFeatures = evt.selectedFeatures;
        mapManager.flayer.features.forEach(f => (f.styleHighLight = false));

        // 判断是否选中
        if (selectedFeatures.length) {
          let feature = null;
          if (selectedFeatures.length === 1) {
            feature = selectedFeatures[0];
          } else {
            const deepFeatures = findDeepPolygon(selectedFeatures);
            if (deepFeatures.length > 0) {
              feature = deepFeatures[0];
            } else {
              feature = selectedFeatures[0];
            }
          }
          this.selectFeature(feature);
        } else {
          mapManager.modifyTool.active = false;
          mapManager.currentFeature = null;
        }
      });

      map.addComponents(select);
      mapManager.selectTool = select;
    },
    setupModifyTool(map) {
      const modifyTool = new mk.Modify();
      modifyTool.addEventListener(mk.ModifyEvent.EventType.MODIFY_END, e => {
        if (mapManager.currentFeature) {
        }
      });
      map.addComponents(modifyTool);
      mapManager.modifyTool = modifyTool;
    },
    selectFeature(feature, button = 1) {
      const formData = feature.get("formData");
      if (formData === undefined) {
        return;
      }
      const allFeatures = mapManager.flayer.features;
      allFeatures.forEach(f => {
        f.styleHighLight = false;
        if (f.id === feature.id) {
          f.styleHighLight = true;
        }
      });

      mapManager.modifyTool.features = [feature];
      mapManager.modifyTool.active = true;
      mapManager.currentFeature = feature;
    },
    /**
     * 图形绘制完毕处理方法
     * @param  {[type]} feature [description]
     * @return {[type]}         [description]
     */
    onDrawEnd(feature) {
      if (feature == undefined) {
        return;
      }
      const overlay = mapManager.overlay;
      const geometry = feature.geometry;
      mapManager.drawingFeature = feature;
      overlay.position = geometry.getFormShowPosition()
      this.formFlag = true;
    },
    popupSubmit(val){
      console.log(val)
    },
    popupCancel(){
      console.log('取消')
    }
  },
  created() {},
  mounted() {
    this.init();
  }
};
</script>
<style scoped lang="less">
.map-container {
  border: 1px solid gray;
  background: #282828;
  width: 100%;
  height: 100%;
  position: relative;
  #map {
    width: 100%;
    height: 100%;
  }
}
</style>