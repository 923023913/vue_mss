<template>
  <div class="header">
    <!-- 头部 logo -->
    <router-link
      to="/"
      tag="div"
      class="header_logo"
    ><img
        src="../../assets/login_titlejpeg.jpeg"
        alt=""
      >
    </router-link>
    <!-- 头部列表nav -->
    <ul class="header-wrap">
      <li
        v-for="(item,index) in adminList"
        :key="index"
        @click="toggleNav(index)"
        :class="{nav_item_active:navActive == index}"
      >
        <img
          :src="navActive==index?`icon/${item.menu_icon}-active.png`:`icon/${item.menu_icon}.png`"
          class="header_wrap_icon"
          alt=""
        >
        <span class="header_wrap_title">{{ item.title }}</span>
      </li>
    </ul>
    <!-- 右侧用户信息 -->
    <el-dropdown trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">
        <img
          :src="userInfo.avatar"
          alt=""
          class="header_avatar"
        ><i class="el-icon-caret-bottom"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <li class="userName">
          <img
            :src="userInfo.avatar"
            alt=""
            class="header_avatar"
          ><span>{{ userInfo.nickname }}</span>
        </li>
        <el-dropdown-item command="edit"><i class="el-icon-s-tools"></i>账号设置</el-dropdown-item>
        <el-dropdown-item command="logout"><i class="el-icon-switch-button"></i>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      userInfo: {},  //用户信息
      navActive: 0,  // 导航列表高亮
      adminList: JSON.parse(localStorage.getItem('adminList')) || [],
    }
  },
  created () {
    this.userInfo = JSON.parse(localStorage.getItem('adminInfo'))
  },
  methods: {
    // 切换导航
    toggleNav (index) {
      this.navActive = index
    },
    // 监听下拉菜单事件
    handleCommand (command) {
      switch(command) {
        case 'edit':
          this.$message({
          type: 'success',
          message: '账号设置!'
        });
          break;
        case 'logout':
          this.logout()
          break;
      }
    },
    // 退出登录
    logout () {
      this.$confirm('确定要退出登录？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 删除 本地token
        localStorage.removeItem('adminToken')
        // 删除 本地用户信息
        localStorage.removeItem('adminInfo')
        this.$message({
          type: 'success',
          message: '退出成功!'
        });
        this.$router.push('/login')
      }).catch(() => {
        this.$message({
          type: 'warning',
          message: '已取消操作'
        });
      });


    }
  }

}
</script>

<style scoped lang='scss'>
.header_logo {
  position: absolute;
  left: 0;
  top: 0;
  height: 64px;
  width: 170px;
  text-align: center;
  img {
    display: inline-block;
    height: 40px;
    margin-top: 12px;
    vertical-align: middle;
  }
}
/* 导航列表 */
.header-wrap {
  position: absolute;
  left: 170px;
  top: 0;
  bottom: 0;
  list-style: none;
  padding: 0 20px;
  margin: 0;
  li {
    display: inline-block;
    margin-right: 40px;
    position: relative;
    height: 64px;
    line-height: 64px;
    font-size: 14px;
    color: #fff;
    opacity: 0.69;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    &.nav_item_active {
      opacity: 1;
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        background-color: #4fe3c1;
        bottom: 0;
        left: 0;
      }
    }
    .header_wrap_icon {
      width: 14px;
      height: 14px;
      margin-right: 5px;
      vertical-align: middle;
    }
  }
}
.el-dropdown {
  position: absolute;
  right: 13px;
  top: 16px;
}
.el-dropdown-link {
  color: #fff;
  .el-icon-caret-bottom {
    font-size: 24px;
    margin-left: 6px;
    vertical-align: middle;
  }
}
.header_avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  vertical-align: middle;
}
/* 下拉菜单 */
.el-dropdown {
  cursor: pointer;
  user-select: none;
}
.el-dropdown-menu {
  padding: 0;
  li {
    padding-left: 16px;
    height: 48px;
    line-height: 48px;

    &.userName {
      display: inline-block;
      width: 240px;
      height: 64px;
      line-height: 64px;
      border-bottom: 1px solid rgba(23, 35, 61, 0.1);
      cursor: default;
      span {
        margin-left: 16px;
        font-size: 14px;
        color: #2185f0;
        white-space: nowrap;
        overflow: hidden;
      }
    }
    &.el-dropdown-menu__item {
      &:hover {
        background: #f1f1f1;
      }
    }
  }
}
.el-icon-s-tools,
.el-icon-switch-button {
  font-size: 18px;
  margin-right: 30px;
  vertical-align: middle;
  color: rgb(170, 170, 170);
}
</style>