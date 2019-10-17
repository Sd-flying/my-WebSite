<template>
  <div>
    <div class="heads">
      <Navl/>
    </div>

    <div class="contents">
      <router-view/>
    </div>

  </div>
</template>

<script>
  import Navl from '../views/navl'

  export default {
    name: "Home",
    components: {
      Navl
    }
  }
</script>

<style scoped>
  .aui-main {
    position: relative;
    min-height: calc(100vh - 50px - 56px);
    margin-left: 230px;
  }

  .aui-control--open .aui-main {
    margin-right: 0;
    min-height: calc(100vh - 50px - 0px);
  }

  .aui-footer {
    height: 0px;
    padding: 0;
  }

  * {
    padding: 0px;
    margin: 0px;
  }

  body, form, div, ul, ol, li, h1, h2, h3, h4, h5, h6, table, tr, th, td, p, input, dl, dt, dd, ul, ol, li, input, textarea, button {
    font-family: microsoft yahei !important;
  }

  img {
    border: none;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  i {
    font-style: normal;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  input, select, button {
    font-size: 12px;
    vertical-align: middle;
  }

  .heads {
    top: 0px;
    right: 0px;
    left: 0px;
    transition: padding-left .3s;
    overflow: hidden;
    width: 100%;
    height: 68px;
    line-height: 68px;
    position: fixed;
    z-index: 9999;
    box-shadow: 0px 0px 8px #ccc;
  }

  .contents {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    /*background-color: #F4F5F5;*/
  }
</style>
