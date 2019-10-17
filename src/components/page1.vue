<template>
  <div class="page1">
    <dialogComponent :is-show="isShowPublish" :top-distance="topNum" @on-close="closeDialog">
      <div slot="header">
        <h4 style="">请点击图片查看效果</h4>
      </div>
      <div class="dialog_publish_main" slot="main">
      </div>
    </dialogComponent>
    <div class="page">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img src="../assets/images/page1/1.jpg" class="pimg" width="300px" height="300px"/>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img src="../assets/images/page1/2.jpg" class="pimg" width="300px" height="300px"/>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img src="../assets/images/page1/3.jpg" class="pimg" width="300px" height="300px"/>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img src="../assets/images/page1/4.jpg" class="pimg" width="300px" height="300px"/>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img src="../assets/images/page1/5.jpg" class="pimg" width="300px" height="300px"/>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img src="../assets/images/page1/6.jpg" class="pimg" width="300px" height="300px"/>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img src="../assets/images/page1/7.jpg" class="pimg" width="300px" height="300px"/>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img src="../assets/images/page1/8.jpg" class="pimg" width="300px" height="300px"/>
          </div>
        </el-col>
      </el-row>
    </div>

    <div id="outerdiv"
         style="position:fixed;top:0;left:0;background:rgba(0,0,0,0.7);z-index:2;width:100%;height:100%;display:none;">
      <div id="innerdiv" style="position:absolute;">
        <img id="bigimg" style="border:5px solid #fff;" src=""/>
      </div>
    </div>
  </div>
</template>

<script>
  import dialogComponent from '../views/dialog'
  // import '../page'

  export default {
    name: "page1",
    data() {
      return {
        tabPosition: 'left',
        isShowPublish: "",
        topNum: ""
      }
    },
    components: {
      dialogComponent
    },
    methods: {
      closeDialog() {
        this.isShowPublish = false;
      }
    }
  }


</script>

<style scoped>
  .page1 {
    height: calc(100vh - 90px);
    overflow: auto;
    margin: 15px 10px 10px;
  }

  .page {
    width: 98%;
  }

  h4 {
    color: wheat;
  }

  .el-row {
    margin-bottom: 20px;
  }

  :last-child {
    margin-bottom: 0;
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .bg-purple {
    height: 300px;
    margin-left: 20%;
    margin-top: 15%;
  }

  .el-col-6 {
    width: 24%;
  }

</style>
