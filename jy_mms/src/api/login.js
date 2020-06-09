import request from '../utils/request'
// 登录接口
const login = (mobile, password) => {
    return request({
        url: '/user/login',
        method: 'post',
        data: {
            mobile,
            password
        }
    })
}
// 获取用户信息接口
const getInfo = (token) => {
    return request({
        url: `/user/info/${token}`,
        method: 'get',
    })
}
// 退出登录接口
const logout =  (token)=> {
    return request({
        url:'/user/logout',
        method:'post',
        data:{
            token
        }
    })
}

export {
    login, 
    getInfo,
    logout
}