<template>
  <div id="busA">
    <h1>小黑记事本</h1>
    <div class="header">
      <input type="text" placeholder="请输入任务" v-model="val">
      <button class="submit" @click="addDataArr">添加任务</button>
    </div>
  </div>
</template>

<script>
// import Bus from '@/utils/eventBus'
export default {
  name: 'busA',
  data () {
    return {
      msg: '这是一个vue项目模板',
      val: ''
    }
  },
  methods: {
    addDataArr () {
      this.$emit('changeVal', this.val)
    }
  }
}
</script>

<style>
</style>
