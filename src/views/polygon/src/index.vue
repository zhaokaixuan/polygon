<template>
<div class="container">
  <div class="header">
      <header-comp></header-comp>
  </div>
  <div class="body">
    <div class="side">
      <side-comp></side-comp>
    </div>
    <div class="map">
      <map-comp ref="map" :coedgeStatus="coedgeStatus" :cutOutStatus="cutOutStatus" :cutSaveStatus="cutSaveStatus"></map-comp>
    </div>
  </div>
</div>
</template>

<script>
import headerComp from './components/header';
import mapComp from './components/map';
import sideComp from './components/side';
import bus from "@Lib/bus"
import { baseMixin } from "@Lib/bus/baseMixin";

export default {
  mixins: [baseMixin],
  components: {
    headerComp,
    sideComp,
    mapComp
  },
  props: {},
  data() {
    return {
      eventList: [
        {
          event: "selectBtn",
          fun: this.selectBtn
        },
        {
          event: 'drawBtn',
          fun: this.drawBtn
        },
        {
          event: 'submit',
          fun: this.submit
        },
        {
          event: 'getCoedgeStatus',
          fun: this.getCoedgeStatus
        },
        {
          event: 'getCutOutStatus',
          fun: this.getCutOutStatus
        },
        {
          event: 'getCutSaveStatus',
          fun: this.getCutSaveStatus
        }
      ],
      coedgeStatus:false,
      cutOutStatus:false,
      cutSaveStatus:false

    };
  },
  watch: {},
  computed: {
    
  },
  methods: {
    selectBtn(){
      console.log('selectbtn')
      this.$refs.map.selectBtn();
    },
    drawBtn(){
      this.$refs.map.drawBtn();
    },
    submit(){
      this.$refs.map.submit();
    },
    getCoedgeStatus(status){
      this.coedgeStatus = status;
    },
    getCutOutStatus(status){
      this.cutOutStatus = status;
    },
    getCutSaveStatus(status){
      this.cutSaveStatus = status;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="less">
@headerHeight:10%;
@bodyHeight:90%;
.container,.header,.body{
  width:100%;
  height:100%;
  margin:0;
  padding:0;
  display: flex;
}
.container{
  flex-direction:column;
  background:#282828;
  .header{
    width:100%;
    height:@headerHeight;
    border:1px solid white;
    box-sizing: border-box;
  }
  .body{
    width:100%;
    height:@bodyHeight;
    .side{
      width:10%;
      height:100%;
      border:1px solid white;
      box-sizing: border-box;
    }
    .map{
      width:90%;
      height:100%;
      border:1px solid white;
      box-sizing: border-box;
    }
  }
}

</style>