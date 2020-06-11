import request from '../utils/request'

const baseURL = process.env.VUE_APP_BASE_API
// 获取用户列表
const getUserList = (offset,limit)=>{
    return request({ method: 'get', url: baseURL + `/v1/users/list?offset=${offset}&limit=${limit}`})
}


export {
    getUserList
}