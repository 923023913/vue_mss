import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '../components/Layout.vue'
Vue.use(VueRouter);

const routes = [
  // 登录路由
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login')
  },
  // 布局
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      // 首页
      { path: '/', component: () => import('../views/manage') },
      // 用户列表
      { path: '/userList', component: () => import('../views/management/userList'), meta: { title: ['数据管理', '用户列表'] } },
      // 商家列表
      { path: '/shopList', component: () => import('../views/management/shopList'), meta: { title: ['数据管理', '商家列表'] } },
      // 食品列表
      { path: '/foodList', component: () => import('../views/management/foodList'), meta: { title: ['数据管理', '食品列表'] } },
      // 订单列表
      { path: '/orderList', component: () => import('../views/management/orderList'), meta: { title: ['数据管理', '订单列表'] } },
      // 管理员列表
      { path: '/adminList', component: () => import('../views/management/adminList'), meta: { title: ['数据管理', '管理员列表'] } },
      // 添加商铺
      { path: '/addShop', component: () => import('../views/add/addShop'), meta: { title: ['添加数据', '添加商铺'] }  },
      // 添加商品
      { path: '/addGoods', component: () => import('../views/add/addGoods'), meta: { title: ['添加数据', '添加商品'] }  },
      // 用户分布
      { path: '/visitor', component: () => import('../views/charts/visitor'),meta: { title: ['图表', '用户分布'] }  },
      // 文本编辑
      { path: '/vueEdit', component: () => import('../views/edit'),meta: { title: ['编辑', '文本编辑'] }  },
      // 管理员设置
      { path: '/adminSet', component: () => import('../views/adminSet'),meta: { title: ['设置', '管理员设置'] }  },
      // 说明
      { path: '/explain', component: () => import('../views/explain'),meta: { title: ['说明', '说明'] }  },

    ]
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router;
