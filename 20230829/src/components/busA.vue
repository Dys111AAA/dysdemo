<template>
  <div id="busA">
    <h1>父组件：{{ color }}---{{ user.username }}---{{ user.age }}---{{ user.sex }}</h1>
    <button @click="user.username='赵六'">子孙组件更改父组件数据</button>
    <button @click="haha">使用父组件的事件</button>
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
  inject: ['color', 'user', 'haha'],
  methods: {
    addDataArr () {
      this.$emit('changeVal', this.val)
    }
  },
  created () {
    console.log(this.haha)
  }
}
</script>

<style>
</style>
