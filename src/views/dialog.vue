<template>
  <div class="dialog">
    <!--外层的遮罩 点击事件用来关闭弹窗，isShow控制弹窗显示 隐藏的props-->
    <div class="dialog-cover back" v-if="isShow" @click="closeMyself"></div>
    <!-- transition 这里可以加一些简单的动画效果 -->
    <transition name="drop">
      <!--style 通过props 控制内容的样式  -->
      <div class="dialog-content" :style="{top:topDistance+'%',width:widNum+'%',left:leftSite+'%'}" v-if="isShow">
        <div class="dialog_head back ">
          <!--弹窗头部 title-->
          <slot name="header">提示信息</slot>
        </div>
        <div class="dialog_main " :style="{paddingTop:pdt+'px',paddingBottom:pdb+'px'}">
          <!--弹窗的内容-->
          <slot name="main">弹窗内容</slot>
        </div>
        <!--弹窗关闭按钮-->
        <div class="foot_close " @click="closeMyself">
          <div class="close_img back">
            <h3>X</h3>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  /** 弹窗组件*/
  export default {
    name: "dialog",
    props: {
      isShow: {
        type: Boolean,
        default: false,
        required: true
      },
      widNum: {
        type: Number,
        default: 86.5
      },
      leftSite: {
        // 左定位
        type: Number,
        default: 6.5
      },
      topDistance: {
        //top上边距
        type: String,
        default: 35
      },
      pdt: {
        //上padding
        type: Number,
        default: 22
      },
      pdb: {
        //下padding
        type: Number,
        default: 47
      }
    },
    methods: {
      closeMyself() {
        this.$emit("on-close");
      }
    }
  };
</script>

<style scoped>
  /** 弹窗动画*/
  .drop-enter-active {
    /*动画进入过程：0 .5 s*/
    transition: all 0.5s ease;
  }

  .drop-leave-active {
    /*动画离开过程： 0 .5 s*/
    transition: all 0.3s ease;
  }

  .drop-enter {
    /*动画之前的位置*/
    transform: translateY(-500px);
  }

  .drop-leave-active {
    /*动画之后的位置 t*/
    ransform: translateY(-500px);
  }

  /*最外层 设置position定位*/
  .dialog {
    position: relative;
    color: #2e2c2d;
    font-size: 16px;
  }

  /*遮罩 设置背景层，z-index值要足够大确保能覆盖，高度 宽度设置满 做到全屏遮罩*/
  .dialog-cover {
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /*// 内容层 z-index要比遮罩大，否则会被遮盖，*/
  .dialog-content {
    position: fixed;
    top: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 300;
  }

  .dialog_head {
    /*/ / 头部title的背景 居中圆角等属性。
    /*没有图片就把background-image注释掉 */
    background-color: #fcca03;
    width: 40.5%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .dialog_main {
    /*/ / 主体内容样式设置 */
    background-image: url("../assets/images/1-2.jpg");
    background-color: #F6F6F6;
    display: flex;
    justify-content: center;
    align-content: center;
    width: 40.5%;
    padding: 22px 0 47px 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 150px;
  }

  .foot_close {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #fcca03;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: -25px;
  }

  .close_img {
    /*background-image: url("../assets/images/1-1.jpg");*/
    width: 42px;
    height: 42px;
  }

  h3 {
    color: wheat;
    font-size: 20px;
    font-size: 40px;
    /*鼠标放上变成小手的形状*/
    cursor: pointer;
  }
</style>
