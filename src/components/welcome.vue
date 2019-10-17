<template>
  <div class="welcome">
    <div class="main-left">
      <header class="main-header">
        <span><img src="../assets/img/juejin.svg" alt=""></span>
        <div @clickoutside="hide" class="drop-down">
          <div class="phone-show-menu" @click="handleMenuClick">
            <span>{{ title }}</span>
            <el-icon class="el-icon-share"></el-icon>
          </div>
          <nav class="phone-hide" :class="{'show':show}">
            <ul class="main-ul">
              <template v-for="(item ,index) in ulLists">
                <li class="nav-item link-item">{{item.title}}</li>
              </template>
            </ul>
          </nav>
        </div>
      </header>
      <main class="main-main">
        <template>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="热门" name="first">
              <ul class="content-ul" v-for="item in articleNews">
                <li>
                  <div class="tops"><span>{{item.title}}·</span></div>
                  <div class="contents">
                    <h3>
                      {{item.content}}
                    </h3>
                  </div>
                  <div class="icones">
                    <el-icon class="el-icon-share"></el-icon>
                  </div>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="最新" name="second">
              <ul class="content-ul" v-for="item in articleNews">
                <li>
                  <div class="tops"><span>{{item.title}}·</span></div>
                  <div class="contents">
                    <h3>
                      {{item.content}}
                    </h3>
                  </div>
                  <div class="icones">
                    <el-icon class="el-icon-share"></el-icon>
                  </div>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="热榜" name="third">
              <ul class="content-ul" v-for="item in articleNews">
                <li>
                  <div class="tops"><span>{{item.title}}·</span></div>
                  <div class="contents">
                    <h3>
                      {{item.content}}
                    </h3>
                  </div>
                  <div class="icones">
                    <el-icon class="el-icon-share"></el-icon>
                  </div>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </template>
      </main>
    </div>
    <div class="main-right">

    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'welcome',
    data() {
      return {
        show: false,
        title: '首页',
        activeName: 'second'
      }
    },
    methods: {
      hide() {
        this.show = false
      },
      handleMenuClick() {
        this.show = !this.show
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    computed: {
      ...mapGetters({
        ulLists: 'getUlLists',
        articleNews: 'getArticleNews'
      })
    }
  }
</script>

<style scoped>
  .welcome {
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
  }

  .main-left {
    display: inline-block;
    height: calc(100vh - 90px);
    overflow: auto;
    width: 860px;
    max-width: 960px;
    background-color: white;
    margin-top:15px ;
    margin-bottom: 10px;
    margin-left: 20%;
  }

  .main-right {
    /*display: inline-block;*/
    /*height: calc(100vh - 90px);*/
    min-width: 240px;
    background-color: white;
    margin-left: 20px;
  }

  .main-header {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
  }

  .main-header span {
    width: 20%;
    align-items: center;
    margin: 10px 10px;
  }

  .drop-down {
    width: 70%;
    margin-right: 30px;
  }

  .main-ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .main-ul li {
    color: black;
    font-size: 1rem;
    cursor: pointer;
    /*box-shadow: 1px 1px 1px #ccc;*/
  }

  .main-ul li:hover {
    color: #006CFF;
  }

  .phone-show-menu {
    display: none
  }

  span {
    margin-right: .5rem
  }

  .phone-hide {
    /*width: 100%;*/
    height: 60px;
    line-height: 60px;
    display: flex;
  }

  .nuxt-link-exact-active {
    color: #007fff;
  }

  .content-ul {
    width: 100%;
  }

  .content-ul li {
    width: 100%;
    height: 10%;
    background-color: white;
    border: 1px solid #f1f1f1;
    border-radius: 1%;
    box-shadow: 0 0 5px rgba(0, 0, 0, .05)
  }

  .content-ul li:hover {
    background-color: #FCFCFC;
  }

  .tops {
    width: 100%;
    height: 1.5rem;
    color: darkgray;
    font-size: 1rem;
    /*float: left;*/
  }

  .tops span {
    margin-left: 20px;
    float: left;
  }

  .content-ul .contents {
    width: 100%;
    height: 2rem;
    font-size: 1rem !important;
    font-weight: bold;
  }

  .contents h3 {
    float: left;
    margin-left: 20px;
  }

  .icones {
    width: 100%;
    height: 1.5rem;
    color: darkgray;
    font-weight: bold;
    font-size: 0.7rem;
  }

  .icones .el-icon-share {
    float: left;
    margin-left: 20px;
  }

  @media (max-width: 960px ) {
    .phone-show-menu {
      height: 1rem;
      display: flex;
      align-items: center;
      font-size: 1rem;
      color: #007fff;
      padding: 0 1rem;
      margin-top: 1rem;
    }

    .phone-hide {
      display: none;
      border: #f9fafc;
      font-size: 1.2rem;
    }

    .main-ul {
      width: 20%;
      display: block;
      padding: 0 2rem;
    }

    .phone-hide.show {
      display: block;
    }
  }
</style>
