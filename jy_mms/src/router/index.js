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
  // 基础布局
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/home',
    children: [
      // 首页
      {
        path: '/home',
        component: () => import('../views/home'),
        meta: {
          title: '首页'
        }
      }
    ]
  },
  // 会员管理
  {
    path: '/member',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('../views/member'),
        meta: {
          title: '会员管理'
        }
      }
    ]
  },
  // 供应商管理
  {
    path: '/supplier',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('../views/supplier'),
        meta: {
          title: '供应商管理'
        }
      }
    ]
  },
  // 商品管理
  {
    path: '/goods',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('../views/goods'),
        meta: {
          title: '商品管理'
        }
      }
    ]
  },
  // 员工管理
  {
    path: '/staff',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('../views/staff'),
        meta: {
          title: '员工管理'
        }
      }
    ]
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
