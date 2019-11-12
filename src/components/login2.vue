<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" class="login-form" auto-complete="on" label-position="left">
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" name="username" type="text" auto-complete="on" placeholder="username"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          :type="pwdType"
          v-model="loginForm.password"
          name="password"
          auto-complete="on"
          placeholder="password"
          @keyup.enter.native="handleLogin"/>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" style="width:100%;" @click="handleLogin">
          登录
        </el-button>
      </el-form-item>
      <!--      <div class="tips">-->
      <!--        <span style="margin-right:20px;">用户名: admin</span>-->
      <!--        <span> 密码: admin</span>-->
      <!--      </div>-->
    </el-form>
  </div>
</template>

<script>
  import {login} from '@/api/login'

  export default {
    name: 'Login',
    data() {
      return {
        loginForm: {
          username: 'admin',
          password: 'admin'
        },
        loading: false,
        pwdType: 'password',
        redirect: undefined
      }
    },
    watch: {
      $route: {
        handler: function (route) {
          this.redirect = route.query && route.query.redirect
        },
        immediate: true
      }
    },
    methods: {
      showPwd() {
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      },

      //登录
      handleLogin() {
        // this.$refs.loginForm.validate(valid => {
        //   if (valid) {
        this.loading = true;
        login(this.loginForm).then(res => {
          if (res.code === 200) {
          this.loading = false
          console.log('success')
          console.log(res.data.msg)
          }else{
            this.loading = false
            console.log(res.data.msg)
          }
        }).catch(e => {
            console.log("登录失败")
            this.loading = false
          })
      }
      // })
      // }
    }
  }
</script>
