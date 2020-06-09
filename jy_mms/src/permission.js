import router from './router'
import { login } from './api/login'

// 全局路由守卫
router.beforeEach((to, form, next) => {
    // 获取本地存储的token
    const token = localStorage.getItem('adminToken')
    // 判断是否有token
    if (!token) {
        // 没有token,不允许访问其他路由，回到登录页面
        if (to.path !== '/login') {
            next({ path: '/login' })
        } else {
            next()
        }
    } else { // 有token，表示已登录，可以访问其他页面
        // 在有token时,查找是否有用户信息
        const userInfo = localStorage.getItem('adminInfo')
        if (userInfo) {
            // 代表有用户信息，进入目标路由
            next()
        } else {
            // 没有用户信息，此时
        }

    }
})