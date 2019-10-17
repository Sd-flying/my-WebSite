<template>
  <div class="page5">
    <div class="myHeaders">
      <Navlist :lists="lists" @changePage="changePage"/>
    </div>
    <div class="muBodys">
      <div class="tables">
        <div v-if="num==1">
          <SubPage1></SubPage1>
        </div>
        <div v-if="num==2">
          <SubPage2></SubPage2>
        </div>
        <div v-if="num==3">
          <SubPage3></SubPage3>
        </div>
        <div v-if="num==4">
          <SubPage4></SubPage4>
        </div>
        <div v-if="num==5">
          <SubPage5></SubPage5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page5',
    data() {
      return {
        num: 1,
        lists: [{
          num: 1,
          name: '潮流穿搭',
          icon: 'el-icon-share',
          color: '#865DED'
        }, {
          num: 2,
          name: '精致护肤',
          icon: 'el-icon-share',
          color: '#F5C600'
        },
          {
            num: 3,
            name: '鬼魅眼影',
            icon: 'el-icon-share',
            color: '#EA93BF'
          }, {
            num: 4,
            name: '惊鸿一瞥',
            icon: 'el-icon-share',
            color: '#F24D79'
          }, {
            num: 5,
            name: '日行万里',
            icon: 'el-icon-share',
            color: '#9886EA'
          }]
      }
    },
    components: {
      'Navlist': () => import('../views/page5/navlist'),
      'SubPage1': () => import('../views/page5/subPage1'),
      'SubPage2': () => import('../views/page5/subPage2'),
      'SubPage3': () => import('../views/page5/subPage3'),
      'SubPage4': () => import('../views/page5/subPage4'),
      'SubPage5': () => import('../views/page5/subPage5')
    },
    methods: {
      changePage(num) {
        this.num = num
      }
    }
  }
</script>

<style scoped>
  .page5 {
    margin: 0 auto;
  }

  .myHeaders {
    width: 100%;
    height: 90px;
    margin-top:20px;
    background-color: white;
  }

</style>
