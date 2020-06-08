module.exports = {
  publicPath: "./", // 解决静态资源文件打包后路径问题
  devServer: {
    port: 8888, // 端口号，如果端口号被占用，会自动提升1 host: "localhost", //主机名， 127.0.0.1， 真机 0.0.0.0
    https: false, //协议 open: true, //启动服务时自动打开浏览器访问 }, lintOnSave: false, // 关闭格式检查
    host: "localhost", //主机名， 127.0.0.1， 真机 0.0.0.0
    open: true // 启动服务时自动打开浏览器访问
  },
  lintOnSave:false,   // 关闭eslint语法格式检查
  productionSourceMap: false // 打包时不会生成 .map文件，加快打包速度
};
