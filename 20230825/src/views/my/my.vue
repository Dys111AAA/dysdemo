<template>
  <div class="my">
    <div>
      <input type="text" v-model.trim="sName">
      <input type="text" v-model.number="sPrice">
      <button @click="add">添加消费记录</button>
    </div>
    <ul>
      <li v-for="(item,i) in xf" :key="item.id">
        <span class="id">{{i+1}}</span>
        <span class="name">{{item.name}}</span>
        <span class="price">{{item.price}}</span>
        <span class="del" @click="del(item.id)">删除</span>
      </li>
    </ul>
    <!-- 定义一个视图可视化的容器  echarts hights -->
    <div id="table"></div>
  </div>
</template>

<script>
  import * as echarts from "echarts"
import axios from "axios"
export default {
  name: 'PageMy',
  data () {
    return {
      msg: '这是一个vue项目模板',
      sName: '',
      sPrice: '',
      xf: []
    }
  },
  created () {
    this.getXf()
  },
  mounted () {//页面挂载结束后
    // 生成图表
    this.setTable()
  },
  methods: {
    async del (id) {
      // 根据id删除商品
      var res = await axios.get("http://82.157.191.232:8090/api/delxf",{
        // axios 传值 需要使用params传递
        params:{
          id:id
        }
      })
      if(res.data.code === 200){
        // 重新调数据
        this.getXf()
      }
    },
    async add () {
      if(!this.sName) return
      if(this.sPrice === null || this.sPrice === undefined || this.sPrice === '') return
      var res = await axios.get("http://82.157.191.232:8090/api/addxf", {
        params: {
          name: this.sName,
          price:this.sPrice
        }
      })
      // console.log(res)
      if(res.data.code === 200){
        // 重新调数据
        this.getXf()
      }
    },
    async getXf(){
      var res = await axios.get("http://82.157.191.232:8090/api/selxf")
      console.log(res)
      if(res.status == 200){
        this.xf = res.data.data
      }
      var data = res.data.data.map(item => ({name: item.name, value: item.price}))
      // 更新一下 柱状图的数据  动态数据
      this.myChart.setOption({
        series: [
          {
            data: data
          }
        ]
      });
    },
    // 渲染图表
    setTable () {
      this.myChart = echarts.init(document.querySelector("#table"))
      this.myChart.setOption({
        // 标题
        title: {
          text: '消费记录表',
          subtext: '这是一个副标题',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        // 提示语句
        series: [
          {
            name: '提示语句',
            type: 'pie',
            radius: '50%',
            // 图表展示的数据
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    }
  }
}
</script>

<style>
  .my{
    width: 500px;
    margin: 0 auto;
  }
  .my ul li{
    display: flex;
    justify-content: space-between;
  }
  #table{
    width: 500px;
    height: 500px;
  }
</style>