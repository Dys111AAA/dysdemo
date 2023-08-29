<template>
  <div id="jishiben">
    <h2>记事本</h2>
    <div>
      <input type="text">
        <button>添加任务</button>
    </div>
    <ul v-if="list.length > 0">
      <li v-for="(item, index) in list" :key="item.id">
        <span>{{ index+1 }}</span>
        <span class="name">{{ item.title }}</span>
        <button>删除</button>
      </li>
    </ul>
    <div>
      <span class="count">共计:{{ count }}项任务</span>
      <button class="">delete All</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jishiben',
  props: {
    list: Array
  },
  data () {
    return {
      msg: '这是一个vue项目模板'
    }
  },
  computed: {
    count () {
      return 100
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
