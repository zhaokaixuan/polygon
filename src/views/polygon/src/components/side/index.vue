<template>
  <div class='side-container'>
     <el-button class="btn" type="success" round v-for='(item, index) in config.tools' :key='index'>{{item.title}}</el-button>
  </div>
</template>

<script>
import config from './config.json'
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
  methods: {},
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