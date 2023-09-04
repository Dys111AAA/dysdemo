<template>
  <div id="slotPage1">
    <!-- 具名插槽
    具名插槽的使用必须用template标签配合 v-slot: 使用
    v-slot: 使用起来比较麻烦，可以使用语法糖 # 来代替
    例：v-slot:left ====> #left -->
    <headerModel>
      <template v-slot:left>
        &lt;
      </template>
      <template #center>
        <input class="ipt" type="text">
      </template>
      <template #right>
        <button @click="aaa">登录</button>
      </template>
    </headerModel>
    <headerModel>
      <template v-slot:left>
        &lt;
      </template>
      <template #center>
        购物车
      </template>
      <template #right>
        ...
      </template>
    </headerModel>
    <headerModel>
      <template v-slot:left>
        &lt;
      </template>
      <template #center>
        <input type="text" style="flex: 1;">
      </template>
      <template #right>
      </template>
    </headerModel>
    <headerModel>
      <template v-slot:left>
        &lt;
      </template>
      <template #center>
        <input type="text">
      </template>
      <template #right>
        <button>搜索</button>
      </template>
    </headerModel>
    <headerModel></headerModel>
  </div>
</template>

<script>
import headerModel from '@/components/headerModel'
export default {
  name: 'slotPage1',
  components: {
    headerModel
  },
  data () {
    return {
      msg: '这是一个vue项目模板'
    }
  },
  methods: {
    aaa () {
      alert('跳转页面')
    }
  }
}
</script>

<style>
  .ipt{
    width: 100%;
  }
</style>
