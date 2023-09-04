<template>
  <div id="vLoading" v-loading="isLoading">
    <!-- v-loading='true' -->
    <!-- 在请求开始的时候，显示 -->
    <!-- 在请求结束的时候，隐藏 -->
    <img src="../../assets/loading.gif" alt="">
    loading...
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'vLoading',
  components: {},
  data () {
    return {
      msg: '这是一个vue项目模板',
      isLoading: false
    }
  },
  created () {
    this.getGoods()
  },
  methods: {
    async getGoods () {
      // 发送请求之前,开启加载动画
      this.isLoading = true
      // 发送请求
      const res = await axios.get('http://82.157.191.232:8090/vuedemo/get_goods')
      setTimeout(() => {
        console.log(res)
        this.isLoading = false
      }, 5000)
    }
  }
}
</script>

<style>
</style>
