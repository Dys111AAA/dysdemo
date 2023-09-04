<template>
  <div id="shopCar">
    这是购物车页面
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar/tabbar'
export default {
  name: 'shopCar',
  components: {
    tabbar
  },
  data () {
    return {
      msg: '这是一个vue项目模板'
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
