<template>
  <div class='side-container'>
    <div class="btn-container">
      <el-button class="btn" type="success" @click="selectBtn">选择</el-button>
      <el-button class="btn" type="success" @click="drawBtn">绘制</el-button>
      <el-button class="btn" type="success" @click="deleteBtn">删除</el-button>
    </div>
    <div class="btn-container">
      <el-checkbox v-model="coedgeStatus">共边</el-checkbox>
      <el-checkbox v-model="cutOutStatus">扣洞切掉</el-checkbox>
      <el-checkbox v-model="cutSaveStatus">扣洞保留</el-checkbox>
    </div>
     
  </div>
</template>

<script>
import bus from "@Lib/bus"

export default {
  components: {},
  props: {
  },
  data() {
    return {
      coedgeStatus: false,
      cutOutStatus: false,
      cutSaveStatus: false
    };
  },
  watch: {
    coedgeStatus(val){
      bus.$emit('getCoedgeStatus',val)
    },
    cutOutStatus(val){
      bus.$emit('getCutOutStatus',val)
    },
    cutSaveStatus(val){
      bus.$emit('getCutSaveStatus',val)
    }
  },
  computed: {},
  methods: {
    selectBtn(){
      bus.$emit("selectBtn");
    },
    drawBtn(){
      bus.$emit('drawBtn');
    },
    deleteBtn(){
      bus.$emit('deleteBtn')
    }
  },
  created() {},
  mounted() {
  }
};
</script>
<style scoped lang="less">
.side-container {
  background: #282828;
  display:flex;
  flex-direction: column;
  .btn-container{
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid gray;
    padding:20px;
  }
}
.el-button+.el-button{
  margin:0;
}
.btn{
  margin:10px !important;
}
.el-checkbox{
  color:#fff !important;
}
</style>