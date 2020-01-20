<template>
<div class="header-container">
  <div class="btn-container">
    <el-button class="btn" type="success" @click="submit">提交</el-button>
  </div>
</div>
</template>

<script>
import bus from "@Lib/bus"
export default {
  components: {},
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {
    submit(){
      bus.$emit("submit");
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="less">
.header-container{
  width:100%;
  height:100%;
  padding:10px;
  .btn-container{
    display: flex;
    justify-content: flex-end;
  }
}
</style>