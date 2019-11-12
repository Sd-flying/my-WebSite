<template>
  <div class="loginPage">
    <div class="login">
      <div class="login_title">
        <span @click="changeLoginway('login')" :class="{login_active:loginway==='login'}">登录</span>
        <b>·</b>
        <span @click="changeLoginway('register')" :class="{login_active:loginway==='register'}">注册</span>
      </div>

      <div v-if="loginway==='login'">
        <div class="input_div">
          <el-input type="text" placeholder="手机号或者邮箱" class="input_top input_normal"/>
        </div>
        <div class="input_div">
          <el-input type="password" placeholder="密码" class="input_bottom input_normal"/>
        </div>
        <div class="forget">
          <span>忘记密码？</span>
        </div>
        <el-button type="info" class="login_button" @click="loginBtns">登录</el-button>
      </div>
      <div v-if="loginway==='register'">
        <div class="input_div">
          <el-input type="text" placeholder="你的昵称" class="input_top input_normal"/>
        </div>
        <div class="input_div">
          <el-input type="password" placeholder="手机号" class="input_middle input_normal"/>
        </div>
        <div class="input_div">
          <el-input type="password" placeholder="输入密码" class="input_bottom input_normal"/>
        </div>
        <el-button type="info" class="login_button">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "login",
    data() {
      return {
        login_active: ''
      }
    },
    computed: {
      ...mapGetters({
        loginway: 'getLoginway'
      })
    },
    methods: {
      changeLoginway(type) {
        this.$store.dispatch('changeLoginway', type)
      },
      loginBtns() {
        console.log('我是登录按钮')
      }
    },
    created() {
      this.$store.dispatch('changeShow', '')
    }
  }
</script>

<style scoped>
  .loginPage {
    height: calc(100vh - 90px);
    overflow: auto;
    background-color: white;
    margin: 15px 10px 10px;
  }

  .login {
    background-color: #e5e9f2;
    width: 450px;
    height: 450px;
    box-shadow: 0px 0px 0px #ccc;
    margin: 100px 38%;
  }

  .login_title {
    padding: 40px;
    color: #2e2c2d;
    font-size: 22px;
  }

  .login_active {
    color: #00BC9B;
    cursor: pointer;
    text-decoration: underline;
  }

  .input_normal {
    width: 300px;
    height: 40px;
  }

  .forget span {
    font-size: 16px;
  }

  .login_button {
    background-color: #00BC9B;
    margin-top: 20px;
    width: 300px;
  }
</style>
