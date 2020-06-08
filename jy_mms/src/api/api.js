import request from "../utils/request";
let getList = () => {
    return request({ url: "/data.json", method: "get" });
}
export {
    // 获取列表
    getList
};
