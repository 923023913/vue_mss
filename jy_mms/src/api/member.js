import request from '../utils/request'

// 单条数据接口
const getList = ()=>{
    return request({ method: 'get', url:'/member/list'})
}
// 分页查询, 
// page当前页码, size 每页显示条数, searchMap 条件
const getPageList = (page, size, searchMap)=>{
    return request({ method: 'post', url:`/member/list/search/${page}/${size}`,data:searchMap})
}

export {
    getList,
    getPageList
}