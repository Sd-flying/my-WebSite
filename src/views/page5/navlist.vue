<template>
  <div class="navs">
    <div class="divs">
      <div class="searchlist">
        <ul>
          <template v-for="(item,index) in lists">
            <li :style="{'background':item.color,'opacity':numbers==item.num?'1':'0.8'}"
                :class="numbers==item.num?'active':''" @click="change(item.num)">
              <div>{{item.name}}</div>
              <div :class="item.icon"></div>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navlist",
    data() {
      return {
        numbers: 1
      }
    },
    //接收父组件传递过来的值
    props: {
      lists: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    methods: {
      change(num) {
        this.numbers = num
        this.$emit('changePage', num)
      }
    }
  }
</script>

<style scoped>
  .divs {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 90px;
  }

  .searchlist {
    width: 50%;
    height: 100%;
  }

  .searchlist ul {
    width: 100%;
    height: 100%;
    margin-left: 10px;
    display: flex;
    align-items: center;
  }

  .searchlist ul li {
    width: auto;
    height: 60px;
    padding: 0 10px;
    /*background: #FF4D51;*/
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    color: #FFFFFF;
    border-radius: 5px;
    margin-right: 20px;
    cursor: pointer;
  }

  .searchlist ul li div:nth-child(1) {
    margin-right: 30px;
  }

  .active {
    box-shadow: 0px 0px 8px #999
  }
</style>
