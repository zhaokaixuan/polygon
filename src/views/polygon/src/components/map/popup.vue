<template>
  <div id='popup'>
    <div class="popup-header">属性</div>
    <el-form ref='form' :model='form' class="popup-form">
      <el-form-item label='类型'>
        <el-radio-group v-model='form.radio'>
          <el-radio class='popup-radio' :label='item.label' v-for="(item,index) in radioConfig" :key="index"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type='primary' @click='onSubmit'>确定</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      radioConfig: [{ label: "车" }, { label: "树" }, { label: "人" }],
      form:{radio:'车'}
    };
  },
  watch: {},
  computed: {},
  methods: {
    onSubmit(){
      this.$emit('submit',this.form.radio)
    },
    cancel(){
      this.$emit('cancel');
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
.popup-header{
  background:#333;
  color:#fff !important;
  padding:10px;
}
.popup-form{
  background:#272727;
  padding:20px;
}
.popup-radio{
  color:#fff !important;
}
</style>