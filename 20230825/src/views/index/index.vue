<template>
  <div class="box">
    hello
    <ul>
      <li v-for="(item,index) in bannerArr" :key="index" v-show="showIndex == index">
        <a href="">
          <img :src="path + '/images/banner/' + item.img" alt="">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
// axios 使用

// axios({
//   url: '',
//   params:
// })
// axios.get("url",{params:{}}).then()
import axios from "axios"
// 配置axios默认请求路径
axios.defaults.baseURL = "http://82.157.191.232:8090"
// 请求超时的时间
axios.defaults.timeout = 5000
// 请求拦截
// 响应拦截
export default {
  name: 'PageIndex',
  data () {
    return {
      msg: '这是一个vue项目模板',
      bannerArr: [],
      path: 'http://82.157.191.232:8090',
      showIndex: 0
    }
  },
  // 创建结束
  created () {
    this.getBanner()
  },
  // 挂载结束
  mounted () {
    // 调用轮播图轮播时间
    this.bannerMove()
  },
  // 修改结束
  updated () {},
  methods: {
    // async getBanner () {
    //   const res = await axios.get("http://82.157.191.232:8090/vuedemo/banner")
    //   console.log(res)
    // },
    getBanner () {
      // 基础promise API封装的异步请求
      // axios.get()
      // axios.post()
      // axios.request()
      // axios.all()
      // axios.input()
      axios.get("/vuedemo/banner").then(res=>{
        console.log(res);
        this.bannerArr = res.data.data
      }).catch(res=>{
        console.log(res);
      })
    },
    bannerMove () {
      setInterval(()=>{
        this.showIndex++
        if(this.showIndex>this.bannerArr.length-1){
          this.showIndex=0
        }
      },2000)
    }
  }
}
</script>

<style>
</style>