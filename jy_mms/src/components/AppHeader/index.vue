<template>
  <div class="header">
      <!-- 头部左侧Logo和标题 -->
      <a href="#/">
        <i class="logo"></i>
        <span class="company">积云管理系统</span>
      </a>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped lang='scss'>
.logo {
    display: inline-block;
    width: 80px;
    height: 50px;
    background: url('../../assets/logo.png') 0 0 no-repeat;
    margin: 0 10px 0;
    vertical-align: middle;
}
.company {
    position: absolute;
    color: #ffffff;
}
</style>