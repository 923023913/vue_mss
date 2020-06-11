<template>
  <div class="nav">
    <el-menu
      default-active="/"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      text-color="#bfcbd9"
      background-color="rgb(50, 64, 87)"
      :router="true"
    >
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <!-- 数据管理 -->
      <el-submenu index="/userList">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>数据管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/userList">用户列表</el-menu-item>
          <el-menu-item index="/shopList">商家列表</el-menu-item>
          <el-menu-item index="/foodList">食品列表</el-menu-item>
          <el-menu-item index="/orderList">订单列表</el-menu-item>
          <el-menu-item index="/adminList">管理员列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 添加数据 -->
      <el-submenu index="/addShop">
        <template slot="title">
          <i class="el-icon-plus"></i>
          <span>添加数据</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/addShop">添加商铺</el-menu-item>
          <el-menu-item index="/addGoods">添加商品</el-menu-item>

        </el-menu-item-group>
      </el-submenu>
      <!-- 图表 -->
      <el-submenu index="/visitor">
        <template slot="title">
          <i class="el-icon-star-on"></i>
          <span>图表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/visitor">用户分布</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 编辑 -->
      <el-submenu index="/vueEdit">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span>编辑</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/vueEdit">文本编辑</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 设置 -->
      <el-submenu index="/adminSet">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/adminSet">管理员设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 说明 -->
      <el-submenu index="/explain">
        <template slot="title">
          <i class="el-icon-warning"></i>
          <span>说明</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/explain">说明</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  props: {

  },
  computed: {
  },
  components: {
  },
  mounted () {

  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped lang='scss'>
.nav {
  width: 240px;
}
.el-menu {
  .el-menu-item-group {
    background-color: #1f2d3d !important;
    .el-menu-item {
      background-color: #1f2d3d !important;
      &>i {
          color: #fff;
          font-size: 12px;
      }
    }
  }
  .el-menu-item:hover {
    background-color: #48576A !important;
    transition: all 0.5s;
  }
}

</style>