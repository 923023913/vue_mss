import request from '../utils/request'

export default {
    // 登录接口
    login (mobile, password) {
        return request({
            url: '/adminUser/login',
            method: 'post',
            data: {
                mobile,
                password
            }
        })
    },
    // 获取用户信息接口
    getInfo () {
        return request({
            url: `/menu/info`,
            method: 'post',
        })
    }
}