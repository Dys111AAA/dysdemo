<template>
  <div id="citiesSel">
    <select :value="103" name="" id="" @change="changeId">
      <option value="101">北京</option>
      <option value="102">上海</option>
      <option value="103">广州</option>
      <option value="104">深圳</option>
      <option value="105">天津</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'citiesSel',
  data () {
    return {
      msg: '这是一个vue项目模板'
    }
  },
  methods: {
    changeId (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style>
</style>
