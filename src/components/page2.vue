<template>
  <div class="page2">
    <div class="page">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-button type="danger" @click="dialogFormVisible = true">点击打开</el-button>
            <el-dialog title="添加日志信息" :visible.sync="dialogFormVisible" top="15%"
                       class="elasticframe">
              <demo1 ref="demo1"></demo1>
            </el-dialog>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-button type="danger" @click="dialogFormVisible_2 = true">点击打开伸缩页面</el-button>

            <el-dialog title="可伸缩的页面" :visible.sync="dialogFormVisible_2" :width="expand?'100%':'800px'" top="15%"
                       class="elasticframe">
              <span class="el-icon-date" @click="expands"></span>
              <demo2 ref="demo2"></demo2>
            </el-dialog>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page2',
    components: {
      'Demo1': () => import('../views/page2/demo1'),
      'Demo2': () => import('../views/page2/demo2')
    },
    data() {
      return {
        count: 0,
        expand: false,
        dialogFormVisible: false,
        dialogFormVisible_2: false
      }
    },
    methods: {
      load() {
        this.count += 2
      },
      expands() {
        this.expand = !this.expand
        this.$refs.demo2.bombsize()
        console.log(this.expand)
      }

    }
  }
</script>
<style scoped>
  .page2 {
    height: calc(100vh - 90px);
    overflow: auto;
    background-color: white;
    margin: 15px 10px 10px;
  }

  .page {
    width: 98%;
  }

  .elasticframe >>> .el-dialog {
    position: relative;
    /*width: auto;*/
  }

  .elasticframe >>> .el-dialog__body {
    /*overflow: hidden;*/
    height: calc(100vh - 300px);
  }

  .el-icon-date {
    position: absolute;
    right: 100px;
    top: 10px;
    color: blue;
    font-size: 16px;
  }
</style>
