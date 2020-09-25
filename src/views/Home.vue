<template>
  <div class="home">
      <div class="block">
        <span class="demonstration">默认</span>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
    </div>
    <div ref="chart" style="width:100%;height:376px"></div>
  </div>
</template>

<script>

/* eslint-disable */

import echarts from 'echarts'
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
     pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''
    }
  },
  methods: {
    chartInit(){
          const myChart = echarts.init(this.$refs.chart)
          // var list = [{"time":"2020-09-23 07:00:00","workOrderNum":0,"userNum":null,"rate":0,"level":null},{"time":"2020-09-23 08:00:00","workOrderNum":0,"userNum":null,"rate":0,"level":null},{"time":"2020-09-23 09:00:00","workOrderNum":0,"userNum":null,"rate":0,"level":null},{"time":"2020-09-23 10:00:00","workOrderNum":0,"userNum":null,"rate":0,"level":null},{"time":"2020-09-23 11:00:00","workOrderNum":0,"userNum":null,"rate":0,"level":null},{"time":"2020-09-23 12:00:00","workOrderNum":0,"userNum":null,"rate":0,"level":null},{"time":"2020-09-23 13:00:00","workOrderNum":0,"userNum":null,"rate":0,"level":null},{"time":"2020-09-23 14:00:00","workOrderNum":0,"userNum":null,"rate":0,"level":null},{"time":"2020-09-23 15:00:00","workOrderNum":0,"userNum":null,"rate":0,"level":null},{"time":"2020-09-23 16:00:00","workOrderNum":0,"userNum":null,"rate":0,"level":null},{"time":"2020-09-23 17:00:00","workOrderNum":0,"userNum":null,"rate":0,"level":null},{"time":"2020-09-23 18:00:00","workOrderNum":0,"userNum":null,"rate":0,"level":null},{"time":"2020-09-23 19:00:00","workOrderNum":0,"userNum":null,"rate":0,"level":null},{"time":"2020-09-23 20:00:00","workOrderNum":0,"userNum":null,"rate":0,"level":null},{"time":"2020-09-23 21:00:00","workOrderNum":0,"userNum":null,"rate":0,"level":null},{"time":"2020-09-23 22:00:00","workOrderNum":0,"userNum":null,"rate":0,"level":null},{"time":"2020-09-23 23:00:00","workOrderNum":0,"userNum":null,"rate":0,"level":null}]
          
          var workOrderNumArr = [2, 3, 4, 6, 4, 8, 10, 22, 2, 4, 6, 7, 9, 10, 12, 14,100, 16] // y 轴数据
          var workOrderNumArr2 = [5, 6, 2, 3, 8, 2, 12, 44, 2, 6, 9, 9, 12, 12, 1, 14,40, 30] // y 轴数据

          var rateArr = [2, 3, 4, 6, 4, 8, 10, 22, 2, 4, 6, 7, 9, 10, 12, 14, 16]
          var rateArr2 = [4, 6, 8, 10, 12, 16, 19, 33, 5, 8, 19, 20, 12, 20, 44, 60, 20]

          var timeArr  =  ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
          
          
          const option = {
            grid: {
              top: 50,
            },
            tooltip: {
              trigger: 'axis',
              // formatter:(params)=>{
              //   var obj = {}
              //   // params.map({
                  
              //   // })
                
              //   return params['0'].seriesName +''+ params['0'].value + '' +params['1'].seriesName +''+ params['1'].value
              // },
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999',
                },
              },
            },

            legend: {
              orient: 'horizontal',
              bottom: 10,
                type: 'scroll',
                width:300,
              data: ['工单量', '工单量2', '工单率', '工单率2' ]
            },
            xAxis: [
              {
                type: 'category',
                data: timeArr,
                axisPointer: {
                  type: 'shadow',
                },
                axisLabel:{
                     rotate: 60,
                }
              },
            ],
            
            yAxis: [
              {
                type: 'value',
                name: '工单率（%）',
                max: 'dataMax',
                splitNumber: 4,
                axisLabel: {
                  formatter: function (value) {
                    return value + '%'
                  },

                },
              
                splitLine: {
                  lineStyle: {
                    type: 'dashed', // 设置网格线类型 dotted：虚线   solid:实线
                  },
                },
              },
              {
                type: 'value',
                name: '工单量（个）',
                splitNumber: 4,
                // interval: 5,
                axisLabel: {
                  formatter: '{value}',
                 rotate: 60,
                },
               
                splitLine: {
                  show: false,
                },

              },
            ],
            series: [
              {
                name: '工单量',
                xAxisIndex: 0,
                type: 'bar',
                itemStyle: {
                  color: 'blue',
                },
                data: workOrderNumArr,
              },
               {
                name: '工单量2',
                xAxisIndex: 0,
                type: 'bar',
                itemStyle: {
                  color: '#54C5FF',
                },
                data: workOrderNumArr2,
              },
              {
                name: '工单率',
                type: 'line',
                smooth: true,
                itemStyle: {
                  color: 'pink',
                },
                yAxisIndex: 0,
                data: rateArr,
              },
             
               {
                name: '工单率2',
                type: 'line',
                smooth: true,
                itemStyle: {
                  color: 'red',
                },
                yAxisIndex: 0,
                data: rateArr2,
              },
            ],
          }
      
           myChart.setOption(option)

            myChart.on('click', function (params) {
                console.log(params)
              if(params.componentType == "xAxis"){

                  alert("单击了"+params.value+"x轴标签");

              }else{

                  alert("单击了"+params.name+"柱状图");

              }

          });


          //  myChart.on("click",function(param){
          //    console.log(111,param)
          //    if(param.componentType =="yAxis" || param.componentType =="xAxis" ){
          //       console.log(2222,param)
          //    }
          //  })
    }
  },
  mounted(){
      this.chartInit()
  }
 
}
</script>
