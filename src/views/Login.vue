<template>
  <div class="login-box">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login-form">
      <h3 class="title">系 统 登 录</h3>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          autocomplete="off"
          placeholder="账 号:"
          prefix-icon="el-icon-goods">
        </el-input>
      </el-form-item>
      <el-form-item prop="userpwd">
        <el-input :type="inputType"
          v-model="loginForm.userpwd"
          @keyup.native.enter="login('loginForm')"
          autocomplete="off"
          placeholder="密 码:"
          prefix-icon="el-icon-time">
          <i slot="suffix" class="el-input__icon el-icon-view btn-eye" @click="changeType"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('loginForm')" class="login-btn" v-loading="loading">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: 'xiaohai',
        userpwd: '123456'
      },
      rules: {
        username: [
          { required: true, message: ' ', trigger: 'blur' }
        ],
        userpwd: [
          { required: true, message: ' ', trigger: 'blur' }
        ]
      },
      loading: false,
      inputType: 'password'
    }
  },
  methods: {
    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          this.$api.common.login(this.loginForm).then(res => {
            localStorage.setItem('key', res.data.data.user_key)
            this.loading = false
            this.$router.replace({ path: 'console' })
          }, error => {
            this.loading = false
          })
        }
      })
    },
    changeType () {
      this.inputType = (this.inputType === 'password' ? 'text' : 'password')
    }
  }
}
</script>

<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #20222A;
  .login-form {
    border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #f5f5f5;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 5px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .btn-eye {
      cursor: pointer;
    }
    .login-btn {
      margin: 35px 0 10px 0;
      width: 100%;
    }
  }
}
</style>
