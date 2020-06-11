<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
}
body {
  margin: 0;
}
.login_container {
  .el-form-item__content {
    margin-right: 100px;
  }
}
.nav {
  .el-submenu__title:hover {
    background-color: #48576a !important;
    transition: all 0.5s;
  }
  .el-menu-item-group__title {
    padding: 0 !important;
  }
  .el-submenu__icon-arrow {
    color: #bfcbd9;
    font-size: 16px;
    font-weight: 700;
  }
}
.main {
  .el-breadcrumb {
    background-color: #eff2f7;
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    .el-breadcrumb__inner {
      color: #97a8be !important;
      font-weight: 400 !important;
      .path_index,
      a {
        color: #48576a !important;
        font-weight: 400 !important;
        &:hover {
          color: #409eff !important;
        }
      }
    }
    .el-breadcrumb__separator {
      font-weight: 400;
      font-size: 13px;
      color: #bfcbd9;
    }
  }
}
</style>
