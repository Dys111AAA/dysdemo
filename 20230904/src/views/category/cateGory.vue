<template>
  <div id="cateGory">
    这是分类页面
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar/tabbar'
export default {
  name: 'cateGory',
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
