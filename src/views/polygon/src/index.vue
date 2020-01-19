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
      <map-comp></map-comp>
    </div>
  </div>
</div>
</template>

<script>
import headerComp from './components/header';
import mapComp from './components/map';
import sideComp from './components/side';
export default {
  components: {
    headerComp,
    sideComp,
    mapComp
  },
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
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