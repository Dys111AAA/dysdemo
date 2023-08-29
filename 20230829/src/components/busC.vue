<template>
  <div id="busC">
    <div class="booter">
      <span>合计：<span>{{ dataArr.length }}</span></span>
      <span class="clearall" @click="clearall">清空任务</span>
    </div>
  </div>
</template>

<script>
// import Bus from '@/utils/eventBus'
export default {
  name: 'busC',
  data () {
    return {
      msg: '这是一个vue项目模板'
    }
  },
  props: ['dataArr'],
  methods: {
    clearall () {
      // this.dataArr.length = 0
      this.$emit('clearAll', [])
    }
  }
}
</script>

<style>
</style>
