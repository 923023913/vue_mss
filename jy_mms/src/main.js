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
// 引入echarts 图表库
import echarts from 'echarts'
// 全局挂载echarts
Vue.prototype.$echarts = echarts
// 是否切换生产环境
Vue.config.productionTip = process.env.NODE_ENV == "production";
// 路由全局守卫
import './permission'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
