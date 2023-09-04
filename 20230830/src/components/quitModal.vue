<template>
  <div id="quitModal" v-show="v">
    <div class="title">
      <h2>退出</h2>
      <button @click="conf">X</button>
    </div>
    <div class="content">
      你确认退出吗？
    </div>
    <div>
      <button @click="conf(true)">确认</button>
      <button @click="conf(false)">取消</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'quitModal',
  data () {
    return {
      msg: '这是一个vue项目模板'
    }
  },
  props: {
    v: Boolean
  },
  methods: {
    conf () {
      // 调用父组件传递的自定义方法
      // this.$emit('close', false)
      this.$emit('update:v', false)
    }
  }
}
</script>

<style>
</style>
