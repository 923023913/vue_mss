<template>
  <div class="login_container">
    <!-- 登录表单 -->
    <el-form
      ref="form"
      label-width="80px"
      :model="form"
      class="login_form"
      :rules="rules"
    >
      <!-- 登录标题 -->
      <h2 class="login_title">积云会员管理系统</h2>
      <!-- 账号 username-->
      <el-form-item
        label="账号"
        prop="username"
      >
        <el-input
          v-model="form.username"
          placeholder="请输入账号"
        ></el-input>
      </el-form-item>
      <!-- 密码 password -->
      <el-form-item
        label="密码"
        prop="password"
      >
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit('form')"
        >登录</el-button>
      </el-form-item>
    </el-form>

    <!-----HEADER END----->

    <!--用来解决视频右键菜单，用于视频上面的遮罩层 START-->
    <div class="videozz"></div>
    <!--用来解决视频右键菜单，用于视频上面的遮罩层 END-->

    <!--音乐 START-->
    <audio
      controls
      autoplay
      class="audio"
    >
      <source
        src="css/Music.mp3"
        type="audio/mp3"
      >
      <source
        src="css/Music.ogg"
        type="audio/ogg"
      >
      <source
        src="css/Music.aac"
        type="audio/mp4"
      >
    </audio>
    <!--音乐 END-->
  </div>

</template>

<script>
import loginApi from '../../api/login'
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
    onSubmit (formName) {
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
      await loginApi.login(this.form.username, this.form.password).then(res => {
        const resp = res.data
        if (resp.code == 200) {
          // 将用户信息存储到本地
          window.localStorage.setItem('adminInfo', JSON.stringify(resp.data))
          // 将token存储到本地
          window.localStorage.setItem('adminToken', resp.data.remember_token)
          // 调用 用户信息接口
          this.getInfo()
          // 跳转到首页
          this.$router.push('/')
        } else {
          this.$message({
            duration: 1 * 2000,
            showClose: true,
            message: resp.msg,
            type: 'warning'
          });
        }
      }).catch(error => {
        console.log(error)
      })
    },
    // 获取用户信息接口
    getInfo () {
      loginApi.getInfo().then(res => {
        if (res.data.code == 200) {
          window.localStorage.setItem('adminList',JSON.stringify(res.data.rows))
        }
      }).catch(error => {
        console.log(error)
      })
    }
  },
}
</script>

<style scoped lang='scss'>
.login_container {
  width: 100%;
  height: 100%;
  background: url('../../assets/login_bg.jpg');
  // background-size: 100% 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  .login_bg {
    position: absolute;

    z-index: -1;
  }
}
.login_form {
  width: 350px;
  padding: 48px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.8);
}
.login_title {
  text-align: center;
  color: #303133;
}
.audio {
  /*设置音乐显示位置*/
  width: 45px;
  position: fixed;
  top: 65px;
  left: 94%;
  z-index: 100;
  filter: alpha(opacity=30);
  -moz-opacity: 0.3;
  -khtml-opacity: 0.3;
  opacity: 0.3;
}
</style>
