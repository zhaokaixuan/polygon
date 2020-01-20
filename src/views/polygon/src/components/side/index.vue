<template>
  <div class='side-container'>
     <el-button class="btn" type="success" @click="selectBtn">选择</el-button>
     <el-button class="btn" type="success" @click="drawBtn">绘制</el-button>
  </div>
</template>

<script>
import config from './config.json'
import bus from "@Lib/bus"

export default {
  components: {},
  props: {},
  data() {
    return {
      config: config,
    };
  },
  watch: {},
  computed: {},
  methods: {
    selectBtn(){
      bus.$emit("selectBtn");
    },
    drawBtn(){
      bus.$emit('drawBtn');
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="less">
.side-container {
  border: 1px solid gray;
  background: #282828;
  display:flex;
  flex-direction: column;
}
.el-button+.el-button{
  margin:0;
}
.btn{
  margin:10px !important;
}
</style>