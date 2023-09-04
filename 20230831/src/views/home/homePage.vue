<template>
  <div id="homePage">
    @/views/home/homePage.vue
    <div><input type="text" v-model="value"></div>
    <div><button @click="isShow = true">操作组件的input显示</button></div>
    <div><customInstruction v-model="value" :visible.sync="isShow"></customInstruction></div>
  </div>
</template>

<script>
import customInstruction from '@/components/customInstruction.vue'
export default {
  name: 'homePage',
  components: {
    customInstruction
  },
  data () {
    return {
      msg: '这是一个vue项目模板',
      isShow: false,
      value: ''
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
