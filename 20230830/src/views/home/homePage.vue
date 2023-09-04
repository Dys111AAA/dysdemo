<template>
  <div id="homePage">
    <h2>这是homePage页面</h2>
    <div>{{ val }}</div>
    <input type="text">
    <input type="text">
    <!-- 方式1 -->
    <!-- <search :kw="val" @changeVal="changeVal"></search> -->
    <!-- 方式2 -->
    <!-- <search v-model="val"></search> -->
    <search :value="val" @input="input"></search>
  </div>
</template>

<script>
import search from '@/components/search'
export default {
  name: 'homePage',
  components: {
    search
  },
  data () {
    return {
      val: '20230830'
    }
  },
  methods: {
    changeVal (value) {
      this.val = value
    },
    input (value) {
      this.val = value
    }
  }
}
</script>

<style>
</style>
