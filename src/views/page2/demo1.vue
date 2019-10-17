<template>
  <div class="linkage">
    <el-dialog :close-on-click-modal="false" :visible.sync="plays.morningVisible" modal-append-to-body="false"
               title="上午行程安排">

    </el-dialog>
    <!--    选择框-->
    <div>
      <el-select v-model="sheng" @change="choseProvince" placeholder="省级地区">
        <el-option v-for="item in province" :key="item.id" :label="item.value" :value="item.id">
        </el-option>
      </el-select>
      <el-select v-model="shi" @change="choseCity" placeholder="市级地区">
        <el-option v-for="item in shi1" :key="item.id" :label="item.value" :value="item.id">
        </el-option>
      </el-select>
      <el-select v-model="qu" @change="choseBlock" placeholder="区级地区">
        <el-option v-for="item in qu1" :key="item.id" :label="item.value" :value="item.id">
        </el-option>
      </el-select>
    </div>
    <!--    选择面板-->
    <div class="party-form">
      <h4><i class="el-icon-date"></i>添加我的日志</h4>
      <!--      添加开始-->
      <div class="addclue">
        <!--        添加上午的行程-->
        <template>
          <div class="clueItem">
            <div class="title">
              <h3><i class="el-icon-date"></i>上午行程安排</h3>
              <span class="el-icon-date" @click="plays.morningVisible=true"></span>
            </div>
            <div class="addItem">
              <ul>
                <template v-for="item in plays.morning">
                  <li>
                    <a href="#">{{item.text}}</a>
                    <span class="el-icon-delete"></span>
                    <span class="el-icon-edit"></span>
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </template>
        <!--        添加下午的行程-->
        <template>
          <div class="clueItem">
            <div class="title">
              <h3><i class="el-icon-date"></i>下午行程安排</h3>
              <span class="el-icon-date" @click="plays.afterVisible=true"></span>
            </div>
            <div class="addItem">
              <ul>
                <template v-for="item in plays.after">
                  <li>
                    <a href="#">{{item.text}}</a>
                    <span class="el-icon-delete"></span>
                    <span class="el-icon-edit"></span>
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </template>
        <!--        添加晚上的行程-->
        <template>
          <div class="clueItem">
            <div class="title">
              <h3><i class="el-icon-date"></i>其他行程安排</h3>
              <span class="el-icon-date" @click="plays.otherVisible=true"></span>
            </div>
            <div class="addItem">
              <ul>
                <template v-for="item in plays.other">
                  <li>
                    <a href="#">{{item.text}}</a>
                    <span class="el-icon-delete"></span>
                    <span class="el-icon-edit"></span>
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </template>
      </div>
    </div>
    <!--    添加结束-->

    <!--    弹框页面-->
    <div>
      <!--    append-to-body   日程信息  :modal-append-to-body='false'-->
      <el-dialog :close-on-click-modal="false" :visible.sync="plays.morningVisible" modal-append-to-body="false"
                 title="上午行程安排">
        <illegalBehavior ref="morning" categoryCode="wjxw" @updatas="updatas('morning',plays,$event)"></illegalBehavior>
      </el-dialog>
      <el-dialog :close-on-click-modal="false" :visible.sync="plays.afterVisible"  append-to-body
                 title="下午行程安排" @close="resetBehavior('duty')">
        <illegalBehavior ref="after" categoryCode="duty_crime_1"
                         @updatas="updatas('after',plays,$event)"></illegalBehavior>
      </el-dialog>
      <el-dialog :close-on-click-modal="false" :visible.sync="plays.otherVisible" append-to-body
                 title="其他行程安排" @close="resetBehavior('otherDuty')">
        <illegalBehavior ref="other" categoryCode="other_crime"
                         @updatas="updatas('other',plays,$event)"></illegalBehavior>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import IllegalBehavior from './dialog/illegalBehavior';

  export default {
    name: "demo1",
    components: {IllegalBehavior},
    data() {
      return {
        //行程表data
        plays: {
          morningVisible: false,
          afterVisible: false,
          otherVisible: false,
          morning: [],
          after: [],
          other: []
        },
        //三级联动data
        mapJson: '../static/json/map.json',
        province: '',
        sheng: '',
        shi: '',
        shi1: [],
        qu: '',
        qu1: [],
        city: '',
        block: ''
      }
    },
    methods: {
      getCityData: function () {
        var that = this
        axios.get(this.mapJson).then(function (response) {
          if (response.status === 200) {
            var data = response.data
            that.province = []
            that.city = []
            that.block = []
            //省市区数据分类
            for (var item in data) {
              if (item.match(/000$/)) {//省
                that.province.push({id: item, value: data[item], children: []})
              } else if (item.match(/00$/)) {//市
                that.city.push({id: item, value: data[item], children: []})
              } else {
                that.block.push({id: item, value: data[item]})
              }
            }
            //分类市级
            for (var index in that.province) {
              for (var index1 in that.city) {
                if (that.province[index].id.slice(0, 2) === that.city[index1].id.slice(0, 2)) {
                  that.province[index].children.push(that.city[index1])
                }
              }
            }

            //分类区级
            for (var item1 in that.city) {
              for (var item2 in that.block) {
                if (that.city[item1].id.slice(0, 4) === that.block[item2].id.slice(0, 4)) {
                  that.city[item1].children.push(that.block[item2])
                }
              }
            }
          } else {
            console.log(response.status)
          }
        }).catch(function (error) {
          console.log(typeof +error)
        })
      },
      //选择省级
      choseProvince: function (e) {
        for (var index2 in this.province) {
          if (e === this.province[index2].id) {
            this.shi1 = this.province[index2].children
            this.shi = this.province[index2].children[0].value
            this.qu1 = this.province[index2].children[0].children
            this.qu = this.province[index2].children[0].children[0].value
          }
        }
      },
      //选市
      choseCity: function (e) {
        for (var index3 in this.city) {
          if (e === this.city[index3].id) {
            this.qu1 = this.city[index3].children
            this.qu = this.city[index3].children[0].value
          }
        }
      },
      //选区
      choseBlock: function (e) {
      },

      //行程面板方法
      updatas(name, plays, information) {
        if (name == 'morning') {
          plays.morning.push(information)
          plays.morningVisible = false
        }
        if (name == 'after') {
          plays.after.push(information)
          plays.afterVisible = false
        }
        if (name == 'other') {
          plays.other.push(information)
          plays.otherVisible = false
        }
      }
    },
    created: function () {
      this.getCityData()
    },
    resetBehavior(flag){
      this.index = '';
      if (flag === 'wjxw') {
        this.$refs.morning.reset();
      } else if (flag === 'duty') {
        this.$refs.after.reset();
      } else if (flag === 'otherDuty') {
        this.$refs.other.reset();
      }
    }
  }
</script>

<style scoped>
  .linkage{
    z-index: 0!important;
  }
  .addclue {
    width: 98%;
    overflow: auto;
    background: #fff;
    /*box-shadow:0 0 8px #ccc;*/
    margin: 10px auto;
    border: 1px solid #ddd;
  }

  .addclue .clueItem {
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid #ddd;
  }

  .addclue .clueItem h3 {
    float: left;
  }

  .addclue .clueItem span {
    float: right;
    font-size: 20px;
    color: #0077FF;
    margin: 10px 28px;
  }

  .addclue .clueItem .addItem ul li span {
    color: #999;
    margin: 10px;
  }

  .addclue .item {
    width: 98%;
    overflow: hidden;
    background: #fff;
    margin: 0px auto;
  }

  .title {
    height: 40px;
    line-height: 40px;
  }

  .title i {
    font-size: 20px;
    color: #999;
    margin: 6px 6px 0 20px;
  }

  .addclue .item .firstitem {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
    padding: 0 23px;
  }

  .el-checkbox {
    margin-right: 25px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  .addItem {
    width: 96%;
    overflow: hidden;
    background: #fff;
    margin: 0px auto;
    border-radius: 4px;
  }

  .addItem .title {
    width: 100%;
    height: 50px;
    line-height: 50px;
  }

  .addItem .title h3 {
    font-size: 15px;
    color: #999;
    float: left;
    font-weight: bold;
  }

  .addItem .title h3 i {
    color: #999;
    font-size: 20px;
  }

  .addItem .title span {
    float: right;
    font-size: 20px;
    color: #0077FF;
    margin-right: 17px;
    margin-top: 15px;
    cursor: pointer;
  }

  .addItem ul li {
    height: 35px;
    line-height: 30px;
  }

  .addItem ul li i {
    font-size: 22px;
    margin-left: 15px;
    color: #999;
  }

  .addItem ul li a {
    font-size: 15px;
    color: #666;
    padding-left: 26px;
  }

  /*.addItem ul li:hover{box-shadow: 0 0 12px #ddd;}*/
  .addItem ul li span {
    float: right;
    font-size: 18px;
    color: #aaa;
    margin: 6px 0px 0 14px;
    cursor: pointer;
  }

  .addItem ul li span:hover {
    color: #0077FF;
  }

  .title .behavior {
    float: left;
    color: #f76c6c;
    padding-left: 20px;
    height: 10px;
    margin-top: 0px;
    font-size: 13px;
  }

  /*///////////////////////////*/

  .btn-list {
    height: 50px;
    line-height: 50px;
    background: #fff;
    padding: 0 15px;
  }

  .formitem {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .base-info {
    width: 100%;
    overflow: hidden;
    margin: 15px 0;
  }

  .icon-document {
    font-size: 17px;
    color: #999;
    padding-top: 10px;
    display: inline-block;
  }

  .icon-selected {
    font-size: 17px;
    color: #0077FF;
    padding-top: 10px;
    display: inline-block;
  }

  .el-form-item {
    width: 100%;
  }

  .person-info {
    /*border-bottom: 1px solid #ddd;*/
  }

  /* 大表单 */
  .bigform {
    width: 20%;
  }

  /* 小表单 */
  .miniform {
    width: 33%;
  }

  /* 基本信息 */
  .base-info-main h3 {
    font-size: 17px;
    font-weight: normal;
    color: #333;
  }

  .base-info-main h3 i {
    color: #1548B1;
    font-size: 18px;
    margin-right: 6px;
  }

  .info-form {
    width: 100%;
    background: #fff;
    overflow: hidden;
    border-radius: 4px;
    padding: 15px 0;
    margin-top: 10px;
    padding-right: 10px;
  }

  /* 人员信息 */
  .person {
    position: relative;
  }

  .info-main {
    background: #fff;
    margin-top: 10px;
    padding-top: 10px;
  }

  .info-main >>> .el-tabs__nav-scroll {
    margin-left: 2%;
  }

  .info-main >>> .el-tabs__item {
    font-size: 16px;
  }

  .person .btn-add {
    position: absolute;
    top: 0px;
    right: 20px;
    z-index: 2;
  }

  .person .btn-add span {
    cursor: pointer;
    color: #1548B1;
    font-size: 24px;
  }

  .person .btn-show {
    position: absolute;
    right: 60px;
    top: 0;
  }

  .person h3 {
    font-size: 17px;
    font-weight: normal;
    color: #333;
  }

  .person h3 i {
    color: #1548B1;
    font-size: 18px;
    margin-right: 6px;
  }

  /* 可编辑表格 */
  .el-tb-edit .el-input,
  .el-tb-edit .el-input-number,
  .el-tb-edit .category,
  .el-tb-edit .el-select {
    display: none;
    width: 100%;
  }

  .el-tb-edit .current-row .el-input,
  .el-tb-edit .current-row .el-input-number,
  .el-tb-edit .current-row .category,
  .el-tb-edit .current-row .el-select {
    display: inherit;
  }

  .el-tb-edit .current-row .el-input + span,
  .el-tb-edit .current-row .el-input-number + span,
  .el-tb-edit .current-row .category + span,
  .el-tb-edit .current-row .el-select + span {
    display: none;
  }

  /*党风个性指标*/
  .party-form {
    margin: 10px auto;
    overflow: hidden;
  }

  .party-form h4 {
    height: 44px;
    line-height: 44px;
    background: #f6f6f6;
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
    font-size: 16px;
    margin: 15px 0;
    color: #333;
  }

  .party-form h4 i {
    margin: 0 6px 0 15px;
    font-size: 18px;
    color: #5358E2;
  }

  /* 八项规定/群腐/问责 */
  .choose-nav {
    width: 100%;
    border-top: 1px solid #ddd;
    padding: 20px 20px 0px;
    margin-top: 10px;
    display: flex;
  }

  .choose-nav .item {
    /*margin-right: 20px;*/
  }

  .choose-nav .item h3 {
    color: #666666;
    font-weight: bold;
    margin-bottom: 5px;
    display: inline-block;
  }

  .choose-nav .item h3 i {
    background: #2ACBE9;
    width: 30px;
    height: 30px;
    display: inline-block;
    float: left;
    border-radius: 50%;
    line-height: 30px;
    text-align: center;
    color: #fff;
    font-size: 14px;
  }

  .choose-nav .item h3 i.blue {
    background: #2ACBE9;
  }

  .choose-nav .item h3 i.purple {
    background: #5358E2;
  }

  .choose-nav .item h3 i.orange {
    background: #FEAE33;
  }

  .choose-nav .item .item-main {
    height: 36px;
    line-height: 36px;
    margin: 10px 0;
  }

  .choose-nav .item .item-main ul li {
    border: 1px solid #DDDDDD;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0 10px;
    border-radius: 4px;
    position: relative;
    border-radius: 3px;
    color: #666666;
  }

  .choose-nav .item .item-main ul li i {
    display: inline-block;
    margin: 10px 18px 0 0px !important;
    font-size: 18px;
  }

  .choose-nav .item .item-main ul li:hover .iselection {
    display: block;
  }

  .iselection {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    z-index: 9;
    display: none;
  }

  .iselection div {
    text-align: center;
  }

  .iselection div:nth-child(1) {
    float: left;
    text-align: center;
    width: 50%;
    font-weight: bold;
    cursor: pointer;
    background: #005BB9;
    opacity: 0.8;
    color: #FFFFFF;
    border-radius: 3px 0 0 3px;
  }

  .yescolor {
    background: #005BB9;
    color: #FFFFFF;
    border: 1px solid #005BB9;
    opacity: 0.8;
  }

  .nocolor {
    background: #262433;
    color: #FFFFFF;
    border: 1px solid #262433;
    opacity: 0.7;
  }

  .iselection div:nth-child(2) {
    float: right;
    text-align: center;
    width: 50%;
    font-weight: bold;
    cursor: pointer;
    background: #262433;
    opacity: 0.8;
    color: #FFFFFF;
    border-radius: 0 3px 3px 0;
  }

  .choose-nav .item .item-main ul li.selected {
    background: #0077FF;
  }

  .choose-nav .item .item-main ul li.selected1 {
    background: #FF970F;
  }

  .choose-nav .item .item-main ul li i {
    width: 5px;
    height: 16px;
    display: inline-block;
    margin: 10px 8px;
    float: left;
  }

  .choose-nav .item .item-main ul li span {
    font-size: 15px;
    /* color: #666; */
  }

  .sub-nav {
    width: 96%;
    margin: 10px auto;
    background: #fff;
    box-shadow: 0 0 8px #ccc;
  }

  .subnav {
    /* padding-top: 10px; */
  }

  .subnav .title {
    height: 50px;
    line-height: 50px;
    /* padding-left: 20px; */
  }

  .subnav .title span {
    color: #666666;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 16px;
    margin-left: 10px;
  }

  .subnav .title .subtits {
    font-weight: none;
    font-size: 14px;
  }

  .subnav .title i {
    background: #2ACBE9;
    width: 30px;
    height: 30px;
    display: inline-block;
    float: left;
    border-radius: 50%;
    line-height: 30px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    margin-top: 8px;
  }

  .subnav .title i.blue {
    background: #2ACBE9;
  }

  .subnav .title i.purple {
    background: #5358E2;
  }

  .subnav .title i.orange {
    background: #FEAE33;
  }

  .w40 {
    width: 40%;
  }

  .w36 {
    width: 23%;
  }

  /*文书模块*/
  .documentDiv .document-item {
    width: 100%;
    overflow: hidden;
  }

  .documentDiv .document-item {
    float: left;
    padding: 10px 0;
  }

  .documentDiv .document-item .item01 {
    width: 100px;
    border: 1px solid #ddd;
    height: 150px;
    float: left;
    margin-left: 4%;
    margin-bottom: 20px;
    cursor: pointer;
    overflow: hidden;
  }

  .documentDiv .document-item .item01 .title i {
    color: #fff;
  }

  .documentDiv .document-item .item01:hover {
    box-shadow: 0 0 10px #ddd;
    border: none;
  }

  .documentDiv .document-item .item01.selected {
    box-shadow: 0 0 10px #ddd;
    border: 1px solid #0077FF;
  }

  .documentDiv .document-item .item01 .document-text {
    width: 27px;
    font-size: 14px;
    color: #666;
    text-align: center;
    /*margin:10% auto;*/
  }

  .documentDiv .document-item .item01 .text01 {
    /*margin:17% auto;*/
  }

  .documentDiv .document-item .item01 .text02 {
    /*margin:30% auto;*/
  }

  .documentDiv .document-item .item01 .text03 {
    /*margin:15% auto;*/
  }
</style>
