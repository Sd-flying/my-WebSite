<template>
  <div>
    <div class="add-discipline">
      <!--一级-->
      <div class="itemOne">
        <h3>一级：</h3>
        <div class="item-content">
          <a v-for="(item, index) in firstOptions" :class="firsid==item.id?'bor':''" :key="index"
             @click="firstone(item.id,item.name)">{{item.name}}</a>
        </div>
      </div>
      <!--二级-->
      <div class="itemOne">
        <h3>二级：</h3>
        <div class="item-content">
          <a v-for="(item, index) in secondOptions" :class="secondid==item.id?'bor':''" :key="index"
             @click="firstwo(item.id,item.name)">{{item.name}}</a>
        </div>
      </div>
      <!--三级-->
      <div class="itemOne">
        <h3>三级：</h3>
        <div class="item-content">
          <a v-for="(item, index) in thirdOptions" :class="thirdid==item.id?'bor':''" :key="index"
             @click="firstree(item.id,item.name)">{{item.name}}</a>
        </div>
      </div>
      <div style="position:fixed;bottom:20px;right:20px;">
        <el-button type="primary" @click="submit">确定</el-button>
        <el-button plain>重置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {CategoryMapNeimeng} from '../../../js/CategoryMapNeimeng';

  export default {
    name: 'illegalBehavior',
    props: {
      categoryCode: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        firstOptions: [], // 一级选项
        secondOptions: [],//二级选项
        thirdOptions: [],//三级选项
        firstvalue: '',
        secondvalue: '',
        thirdvalue: '',
        firsid: '',
        secondid: '',
        thirdid: ''
      }
    },
    mounted() {
      this.dataLoading()
    },
    methods: {
      dataLoading() {
        this.firstOptions = [];
        if (this.categoryCode != null && this.categoryCode != '') {
          for (let i = 0; i < CategoryMapNeimeng.length; i++) {
            if (this.categoryCode === CategoryMapNeimeng[i].code) {
              this.firstOptions = CategoryMapNeimeng[i].children;
              console.log('61', this.firstOptions)
              if (this.firstOptions != undefined) {
                this.secondOptions = this.getArray(this.firstOptions, this.firstOptions[0].id)
              }
              if (this.secondOptions != undefined) {
                this.thirdOptions = this.getArray(this.secondOptions, this.secondOptions[0].id)
              }
            }
          }
        }
      },

      getArray(data, name) {
        for (var i in data) {
          if (data[i].id == name) {
            return data[i].children
            break;
          } else {
            this.getArray(data[i].children, name);
          }
        }
      },
      firstone(id, text) {
        if (this.firstOptions != undefined) {
          this.secondOptions = this.getArray(this.firstOptions, id)
          console.log(this.secondOptions)
        }
        if (this.secondOptions != undefined) {
          this.thirdOptions = this.getArray(this.secondOptions, this.secondOptions[0].id)
          console.log(this.thirdOptions)
        }
        this.firsid = id
        this.firstvalue = text
      },
      firstwo(id, text) {
        if (this.secondOptions != undefined) {
          this.thirdOptions = this.getArray(this.secondOptions, id)
        }
        this.secondvalue = text
        this.secondid = id
      },
      firstree(id, text) {
        this.thirdvalue = text
        this.thirdid = id
      },
      submit() {
        let text = this.firstvalue + ',' + this.secondvalue + ',' + this.thirdvalue
        let id = this.firsid + this.secondid + this.thirdid
        let information = {text: text, id: id}

        console.log(information)
        this.$emit('updatas', information)
      }
    }
  }
</script>

<style scoped>
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

  .add-discipline {
    width: 100%;
    padding: 2%;
    height: 600px;
  }

  .itemOne {
    width: 100%;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .itemOne h3 {
    font-size: 15px;
    color: #666;
    font-weight: bold;
    float: left;
    padding-right: 10px;
    margin-top: 5px;
  }

  .itemOne .item-content {
    float: left;
    width: 93%;
  }

  .itemOne .item-content span {
    float: left;
    padding: 4px 15px;
  }

  .itemOne .item-content a {
    float: left;
    display: inline-block;
    padding: 4px 15px;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 5px;
    margin-bottom: 5px;
  }

  .itemOne .item-content a.cur {
    background: #0077FF;
    color: #fff;
  }

  .bor {
    background: #0077FF;
    color: #fff;
  }
</style>
