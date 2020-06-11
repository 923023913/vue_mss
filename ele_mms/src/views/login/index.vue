<template>
  <div class="login_container">
    <div class="login_center">
      <div class="login_title">
        <img
          src="../../assets/login_titlejpeg.jpeg"
          width="220"
          alt=""
        >
        <div class="major">欢迎使用后台管理系统</div>
      </div>
      <el-form
        :model="form"
        :rules="rules"
        ref="form"
        label-width="100px"
        class="demo-ruleForm"
      >
        <!-- 账号 -->
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            placeholder="请输入账号"
          >
            <i
              slot="prefix"
              class="el-icon-s-custom"
              color="#000"
            ></i>
          </el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            show-password
          >
            <i
              slot="prefix"
              class="el-icon-s-goods"
            ></i>
          </el-input>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="submitForm('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
import { login, getInfo } from '../../api/login'
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '', // 账号
        password: '', // 密码
      },
      // 失去焦点，进行验证
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 5, max: 12, message: '账号不能少于6位字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '密码不能少于6位字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 登录验证
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        // 如果账号和密码都符合正则，那么就发送请求
        if (valid) {
          // 调用登录接口
          this.getLogin()
        } else {  // 账号和密码不符合正则,弹出提示
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 登录接口
    async getLogin () {
      await login(this.form.username, this.form.password).then(res => {
        const resp = res.data
        console.log(res.data)
        if (resp.code === 200) {
          // 将token存储到本地
          window.localStorage.setItem('adminToken', resp.data.remember_token)
          window.localStorage.setItem('adminInfo',JSON.stringify( resp.data))
          // 调用 用户信息接口
          this.getInfo()
        } else {
          this.$message({
            duration: 1 * 2000,
            showClose: true,
            message: resp.msg,
            type: 'warning'
          });
          return false
        }
      }).catch(error => {
        // console.log(error)
        return false
      })
    },
    // 获取用户信息接口
    getInfo () {
      getInfo().then(res => {
        const resUser = res.data
        console.log(resUser)
        if (resUser.code === 200) {
          // 将用户信息保存在本地
          window.localStorage.setItem('adminList', JSON.stringify(resUser.rows))
          // Loading加载动画
          const loading = this.$loading({
            lock: true,
            text: '登录中...',
            // spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          setTimeout(() => {
            loading.close();
            // 跳转到首页
            this.$router.push('/')
          }, 2000);
        }
      }).catch(error => {
        // console.log(error)
        return false
      })
    }
  },
}
</script>

<style scoped lang='scss'>
.login_container {
  width: 100%;
  height: 100%;
  background: url('../../assets/login_bg.png');
  // background-size: 100% 100%;
  overflow: hidden;
  .login_bg {
    position: absolute;
    z-index: -1;
  }
}
.login_center {
  position: absolute;
  width: 600px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.login_title {
  text-align: center;
  img {
    margin-bottom: 3vh;
  }
  .major {
    font-size: 20px;
    margin-bottom: 20px;
    color: #2d8cf0;
  }
}
.login_form {
  width: 100%;
  padding: 48px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
