<template>
  <div class="site">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo mySty-menu" mode="horizontal" router
             @select="handleSelect">
      <h3 class="font_h3">个人技术博客</h3>
      <el-menu-item index="/welcome">Welcome</el-menu-item>
      <el-menu-item index="/page1">SDGK</el-menu-item>
      <el-menu-item index="/page2">COOL</el-menu-item>
      <el-menu-item index="/page5">FASHION</el-menu-item>
      <el-menu-item index="/page7">TABLE</el-menu-item>
      <div style="margin-left: 200px;width: 360px;display: inline-block;">
        <el-menu-item index="/login" @click="changeLoginway('login')" style="color: #00BC9B;margin-right: -10px;">Login
        </el-menu-item>
        <el-menu-item index="/login" @click="changeLoginway('register')" style="color: #00BC9B">Register</el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "navl",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    computed: {
      ...mapGetters({})
    },
    methods: {
      changeLoginway(type) {
        this.$store.dispatch('changeLoginway', type)
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }

  }
</script>

<style>
  .el-menu {
    border-radius: 0px;
    /*width: 100%;*/
  }

  .mySty-menu {
    font-size: 20px;
  }

  .font_h3 {
    color: aliceblue;
    display: inline-block;
    float: left;
    margin-left: 100px;
    font-family: 华文楷体;
    margin-right: 200px;
  }

  .el-menu--horizontal .el-menu-item {
    font-size: 20px;
    margin-top: 8px;
    margin-right: 40px;
  }

  .el-menu--dark .el-menu-item, .el-menu--dark .el-submenu__title {
    color: #bfcbd9;
    font-size: 20px;
    margin-right: 40px;
    margin-top: 8px;
  }

  .right_nav {
    /*float: right;*/
    color: white;
  }
</style>
