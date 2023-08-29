<template>
  <div id="busB">
    <ul class="main">
      <li v-for="(item, i) in dataArr" :key="item.id">
        <span>{{ i+1 }}.</span>
        <span>{{ item.text.trim() }}</span>
        <span class="demo" @click="demo(item.id)">X</span>
      </li>
    </ul>
  </div>
</template>

<script>
// import Bus from '@/utils/eventBus'
export default {
  name: 'busB',
  data () {
    return {
      msg: '啥时候下课啊 '
    }
  },
  props: ['dataArr'],
  mounted () {
  },
  methods: {
    demo (id) {
      this.dataArr = this.dataArr.filter(item => item.id !== id)
      this.$emit('demoArr', this.dataArr)
    }
  }
}
</script>

<style>
</style>
