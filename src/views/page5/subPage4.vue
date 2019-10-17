<template>
  <div class="page4">
    <div class="top">
      <div class="left">
        <div class="box1" ref="echart1"></div>
      </div>
      <div class="middle">
        <div class="box2" ref="echart3"></div>
      </div>
      <div class="right">
        <div class="box3" ref="echart2"></div>
      </div>
    </div>
    <div class="bottom">
      <div class="box4" ref="echart4"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SubPage4",
    data() {
      return {
        data: [
          {
            name: 'Grandpa',
            children: [{
              name: 'Uncle Leo',
              value: 15,
              children: [{
                name: 'Cousin Jack',
                value: 2
              }, {
                name: 'Cousin Mary',
                value: 5,
                children: [{
                  name: 'Jackson',
                  value: 2
                }]
              }, {
                name: 'Cousin Ben',
                value: 4
              }]
            }, {
              name: 'Father',
              value: 10,
              children: [{
                name: 'Me',
                value: 5
              }, {
                name: 'Brother Peter',
                value: 1
              }]
            }]
          }, {
            name: 'Nancy',
            children: [{
              name: 'Uncle Nike',
              children: [{
                name: 'Cousin Betty',
                value: 1
              }, {
                name: 'Cousin Jenny',
                value: 2
              }]
            }]
          }]
      }
    },
    mounted() {
      this.initChart()
      this.initChart2()
      this.initChart3()
      this.initChart4()
    },
    methods: {
      initChart() {
        var chart1 = this.$echarts.init(this.$refs.echart1);
        window.addEventListener('resize', function () {
          chart1.resize();
        });
        chart1.setOption(this.setOption('图像一'));
      },
      setOption(title) {
        let option = {
          title: {text: title},
          series: {
            type: 'sunburst',
            data: [
              {
                name: 'A',
                value: 10,
                children: [{
                  value: 3,
                  name: 'Aa',
                  itemStyle: {
                    color: 'red'
                  }
                }, {
                  value: 5,
                  name: 'Ab'
                }]
              }, {
                name: 'B',
                children: [{
                  name: 'Ba',
                  value: 4
                }, {
                  name: 'Bb',
                  value: 2
                }],
                itemStyle: {
                  color: 'red'
                }
              }, {
                name: 'C',
                value: 3
              }],
            itemStyle: {
              color: '#aaa'
            },
            levels: [
              {
                // 留给数据下钻的节点属性
              },
              {
                itemStyle: {
                  color: 'blue'
                }
              }]
          }
        }
        return option;
      },
      initChart2() {
        var chart2 = this.$echarts.init(this.$refs.echart2);
        window.addEventListener('resize', function () {
          chart2.resize();
        });
        chart2.setOption({
          series: {
            name: '业务指标',
            detail: {formatter: '{value}%'},
            type: 'gauge',
            data: [{value: 52, name: '完成率'}],
          }
        })
      },
      initChart3() {
        var chart3 = this.$echarts.init(this.$refs.echart3);
        window.addEventListener('resize', function () {
          chart3.resize();
        });
        chart3.setOption({
          legend: {},
          tooltip: {},
          dataset: {
            source: [
              ['product', '2015', '2016', '2017'],
              ['Matcha Latte', 43.3, 85.8, 93.7],
              ['Milk Tea', 83.1, 73.4, 55.1],
              ['Cheese Cocoa', 86.4, 65.2, 82.5],
              ['Walnut Brownie', 72.4, 53.9, 39.1]
            ]
          },
          xAxis: {type: 'category'},
          yAxis: {},
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'}
          ]
        })
      },
      initChart4() {
        var chart4 = this.$echarts.init(this.$refs.echart4);
        window.addEventListener('resize', function () {
          chart4.resize();
        });
        chart4.setOption({

        })
      }
    }
  }
</script>

<style scoped>
  .top {
    width: 100%;
    padding: 15px 0px;
    margin-right: 10px;
    display: flex;
    justify-content: space-around;
  }

  .left {
    width: 25%;
  }

  .box1 {
    width: 100%;
    background-color: white;
    height: 300px;
  }

  .middle {
    width: 43%;
  }

  .box2 {
    width: 100%;
    background-color: white;
    height: 300px;
  }

  .right {
    width: 25%;
  }

  .box3 {
    width: 100%;
    background-color: white;
    height: 300px;
  }

  .bottom {
    /*width: 100%;*/
    padding: 10px 20px;
    /*margin-right: 10px;*/
    display: flex;
    justify-content: space-around;
  }

  .box4 {
    width: 100%;
    background-color: white;
    height: 400px;
  }


</style>
