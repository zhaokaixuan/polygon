<template>
  <div class='map-container'>
    <div id='map' @contextmenu.prevent="onMapClick($event)"></div>
    <popup v-show='formFlag' @submit='popupSubmit' @cancel='popupCancel' :value="formValue"></popup>
  </div>
</template>

<script>
import mk from "@Lib/mk";
import popup from "./popup";
import MapUtil from "@Utils/map/mapUtil";
import result from "../../../data";
import { getUid, setUid } from "@Utils/map/idCounter";
import { findDeepPolygon, paintPolygon } from "@Utils/map/polygonUtil";
import bus from "@Lib/bus";

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
let FORMSTATUS = {
  DRAW: 1,
  MODIFY: 2,
  HIDE: 3
};
let color = {
  r: 255,
  g: 0,
  b: 0
};
export default {
  components: {
    popup
  },
  props: {},
  data() {
    return {
      formFlag: false,
      formValue:''
    };
  },
  watch: {},
  computed: {},
  methods: {
    onMapClick(){},
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
      this.selectBtn();
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
      let maxId = -100;
      features.forEach(f => {
        const formData = f.get("formData");
        if (formData) {
          const id = formData.id;
          maxId = Math.max(maxId, id);
        }
      });

      if (maxId > 0) {
        setUid(maxId + 1);
      } else {
        setUid(0);
      }
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
          const button = evt.browserEvent.originalEvent.button;
          this.selectFeature(feature, button);
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
      if (button === 2) {
        this.changeFormStatus(FORMSTATUS.MODIFY,feature)
      }
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
      overlay.position = geometry.getFormShowPosition();
      this.changeFormStatus(FORMSTATUS.DRAW);
    },
    changeFormStatus(status,feature) {
      if (status === FORMSTATUS.DRAW) {
        //清空表单
        this.formValue = ''
        this.formFlag = true;
      } else if (status === FORMSTATUS.MODIFY) {
        //回填表单
        console.log(feature)
        console.log(feature.get('formData'))
        this.formValue = feature.get('formData').value;
        this.formFlag = true;
      } else if (status === FORMSTATUS.HIDE) {
        this.formFlag = false;
      }
    },
    popupSubmit(val) {
      //设置表单
      this.setGeometryForm(val);
      this.changeFormStatus(FORMSTATUS.HIDE);
    },
    setGeometryForm(data) {
      let obj = {};
      let currentFeature = mapManager.drawingFeature;
      if (currentFeature == null) {
        currentFeature = mapManager.currentFeature;
      }

      if (MapUtil.isNewFeature(currentFeature)) {
        obj.id = getUid();
      } else {
        obj.id = currentFeature.get("formData").id;
      }
      obj.value = data;
      let str = "";
      str += "-" + data;
      currentFeature.displayText = obj.id + str;
      currentFeature.set("formData", obj);

      if (color != null && mapManager.drawingFeature != null) {
        currentFeature.set("fcolor", [color.r, color.g, color.b]);
        paintPolygon(currentFeature, this.color);
      }

      mapManager.drawingFeature = null;
    },
    setFormCancel() {
      let currentFeature = mapManager.currentFeature;
      if (currentFeature == null) {
        currentFeature = mapManager.drawingFeature;
      }

      // 新绘制图形，则点击取消时，则删除绘制
      if (MapUtil.isNewFeature(currentFeature)) {
        mapManager.flayer.removeFeature(currentFeature);
        mapManager.currentFeature = null;
      } else {
        mapManager.selectTool.clear();
        mapManager.modifyTool.active = false;
        mapManager.currentFeature = null;
      }
    },
    popupCancel() {
      //删除图形
      this.setFormCancel();
      this.changeFormStatus(FORMSTATUS.HIDE);
    },
    selectBtn() {
      mapManager.drawTool.active = false;
      mapManager.selectTool.active = true;
    },
    drawBtn() {
      console.log("drawbtn");
      mapManager.drawTool.active = true;
      mapManager.selectTool.active = false;
      mapManager.modifyTool.active = false;
      mapManager.flayer.features.forEach(f => {
        if (f.styleHighLight) {
          f.styleHighLight = false;
        }
      });
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