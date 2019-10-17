<template>
  <div class="page4">
    <div class="left">
      <div class="page_top">
        <div ref="echart1" class="box"></div>
      </div>
      <div class="page_bottom">
        <div ref="echart2" class="box1"></div>
      </div>
    </div>
    <div class="right">
      <div class="box2">
        <Maps></Maps>
      </div>
    </div>
  </div>
</template>

<script>
  import Maps from './maps'

  export default {
    name: 'subPage2',
    components: {
      Maps
    },
    mounted() {
      this.initChart();
      this.initChart2();
    },
    data() {
      return {};
    },
    methods: {
      initChart() {
        var myChart1 = this.$echarts.init(this.$refs.echart1);
        window.addEventListener('resize', function () {
          myChart1.resize();
        });
        myChart1.setOption({
          title: {
            text: '直方图'
          },
          //tooTip组件
          tooltip: {
            show: true,
            trigger: "axis"
          },
          //弹窗工具
          toolbox: {
            show: true,
            feature: {
              dataView: {
                show: true
              },
              saveAsImage: {
                title: '保存为图片',
                show: true
              },
              restore: {
                show: true
              },
              dataZoom: {
                show: true
              },
              magicType: {
                type: ['line', 'bar']
              }
            }
          },
          xAxis: {
            data: ["一月", "二月", "三月", "四月", "五月", "六月",'七月','八月']
          },
          yAxis: [{
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value} ml'
            }
          },
            {
              type: 'value',
              name: '温度',
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                formatter: '{value} C'
              }
            }],
          series: [
            {
              name: "蒸发量",
              type: 'bar',
              data: [72.0, 48.0, 293.5, 182.4, 34.5, 23.0, 22.0, 67.0]
            },
            {
              name: "降水量",
              type: 'bar',
              data: [42.0, 74.0, 93.5, 72.4, 342.5, 63.0, 82.0, 67.0]
            },
            {
              name: "平均温度",
              type: 'line',
              // yAxisIndex: 1,
              data: [23.0, 32.0, 6.5, 76.4, 34.5, 23.0, 22.0, 67.0]
            }
          ]
        });
      },
      initChart2() {
        var myChart2 = this.$echarts.init(this.$refs.echart2);
        window.addEventListener('resize', function () {
          myChart2.resize();
        });
        myChart2.setOption({
          title: {
            // left: 50
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '邮箱']
          },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [
            {
              name: "广告",
              type: "pie",
              radius: '70%',
              center: ['53%', '42%'],
              data: [
                {value: 334, name: '直接访问'},
                {value: 337, name: '邮件营销'},
                {value: 123, name: '联盟广告'},
                {value: 232, name: '视频广告'},
                {value: 111, name: '邮箱'}
              ]
            }
          ]
        });
      }
    }
  };
</script>
<style scoped>
  .page4 {
    margin: 0 auto;
    width: 100%;
    display: flex;
    padding: 10px 10px;
  }

  .left {
    width: 40%;
    padding: 10px 10px;
    dispaly: flex;
    flex-direction: column;
  }

  .page_top {
    margin-bottom: 20px;
  }


  .right {
    flex: 1;
    padding: 10px 10px;
    margin-right: 15px;
  }

  .box {
    height: 360px;
    background-color: white;
  }

  .box1 {
    height: 350px;
    background-color: white;
  }

  .box2 {
    height: 730px;
    background-color: white;
  }

</style>

