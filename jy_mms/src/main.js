import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入element-ui组件库
import ElementUI from "element-ui";
// 引入element-ui样式
import "element-ui/lib/theme-chalk/index.css";
// 使用element-ui
Vue.use(ElementUI);
//
Vue.config.productionTip = process.env.NODE_ENV == "production";
// 检测当前是开发环境还是生产环境
console.log(process.env.NODE_ENV);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
