<template>
  <div class="header">
    <!-- 头部左侧Logo和标题 -->
    <router-link to="/">
      <i
        class="logo"
        :src="userInfo.avatar"
      >
      </i>
      <span class="company">积云会员管理系统</span>
    </router-link>
    <!-- 右侧下拉菜单 -->
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <img
          src="../../assets/avatar.jpg"
          alt=""
          class="avatar"
        >
        <span>{{ userInfo.name }}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          icon="el-icon-edit"
          command="changePassword"
        >
          修改密码
        </el-dropdown-item>
        <el-dropdown-item
          icon="el-icon-s-unfold"
          command="logout"
        >
          退出系统
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { logout } from '../../api/login'
export default {
  name: 'Header',
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    const info = localStorage.getItem('adminInfo')
    this.userInfo = JSON.parse(info)
  },
  methods: {
    handleCommand (command) {
      switch (command) {
        // 修改密码
        case 'changePassword':
          this.changePassword();
          break;
        // 退出登录
        case 'logout':
          this.logout();
          break;
      }
    },
    // 修改密码
    changePassword () {
      this.$message({
        showClose: true,
        duration: 1 * 1000,
        message: '修改密码',
        type: 'success'
      });
    },
    // 退出登录
    logout () {
      this.$confirm('确定要退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 获取本地存储的token
        const token = localStorage.getItem('adminToken')
        // 调用退出登录接口
        logout(token).then(res => {
          if (res.data.flag) {
            // 清除本地存储的token
            localStorage.removeItem('adminToken')
            // 清除本地存储的用户信息
            localStorage.removeItem('adminInfo')
            this.$message({
              type: 'success',
              message: res.data.message
            });
            this.$router.push('/login')
          } else {
            this.$message({
              message: res.data.message,
              type: 'warning'
            });
          }
        })

      }).catch(() => {
        this.$message({
          duration: 1 * 1000,
          type: 'info',
          message: '取消操作'
        });
      });

    }
  }
}
</script>

<style scoped lang='scss'>
.logo {
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: url('../../assets/logo.png') 0 0 no-repeat;
  background-size: 100% 100%;
  margin: 0 10px 0 40px;
  vertical-align: middle;
}
.company {
  position: absolute;
  color: #ffffff;
}
.el-dropdown {
  float: right;
  padding-right: 40px;
  color: #fff;
}
.el-dropdown-link {
  cursor: pointer;
  .avatar {
    width: 30px;
    height: 30px;
    margin: 0 10px 0 0;
    border-radius: 50%;
    vertical-align: middle;
  }
  span {
    vertical-align: middle;
  }
}
</style>