<template>
  <div id="mySelf">
    这是我的页面
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar/tabbar'
export default {
  name: 'mySelf',
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
