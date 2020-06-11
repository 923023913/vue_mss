import request from '../utils/request'
const baseURL = process.env.VUE_APP_LOGIN_API
// 登录接口
const login = (mobile, password) => {
    return request({
        url: baseURL+'/adminUser/login',
        method: 'post',
        data: {
            mobile,
            password
        }
    })
}
// 获取用户信息接口
const getInfo = () => {
    return request({
        url: baseURL+'/menu/info',
        method: 'post',
    })
}

export {
    login, 
    getInfo,
}