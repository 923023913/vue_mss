import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // 首页
  {
    path: '/',
    name:'Layout',
    component:()=>import('../components/Layout.vue')
  },
  // 登录路由
  {
    path:'/login',
    name:'Login',
    component:()=>import('../views/login')
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

/* 全局守卫 */

export default router;
