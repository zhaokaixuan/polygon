import Vue from 'vue';
import router from './router';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
require("babel-polyfill");

Vue.use(ElementUI);

const app = new Vue({
  router,
  ...App
});

app.$mount('#App');
