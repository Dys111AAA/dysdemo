<template>
  <div id="busD">
  </div>
</template>

<script>
// import Bus from '@/utils/eventBus'
export default {
  name: 'busD',
  data () {
    return {
      msg: '这是一个vue项目模板'
    }
  },
  created () {
    console.log(this.$bus)
    this.$bus.$emit('son', this.msg)
  },
  methods: {
  }
}
</script>

<style>
</style>
