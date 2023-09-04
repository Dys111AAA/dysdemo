<template>
  <div id="slotPage2">
    <!-- 默认作用域插槽 -->
    <!-- <classList :classArr="class2112" #default="obj">
      <button @click="del(obj.sid)">删除</button>
    </classList> -->
    <!-- 具名作用域插槽 -->
    <classList :classArr="class2112">
      <template #aa="obj">
        <button @click="del(obj.sid)">删除</button>
      </template>
    </classList>
    <classList :classArr="class2110">
      <template #aa="obj">
        <button @click="sel(obj)">查看</button>
      </template>
    </classList>
  </div>
</template>

<script>
import classList from '@/components/classList.vue'
export default {
  name: 'slotPage2',
  components: {
    classList
  },
  data () {
    return {
      msg: '这是一个vue项目模板',
      class2112: [
        {id: 1, name: 'zhangsan', age: '18'},
        {id: 2, name: 'lisi', age: '18'},
        {id: 3, name: 'wangwu', age: '18'},
        {id: 4, name: 'zhaoliu', age: '18'},
        {id: 5, name: 'zhouqi', age: '18'},
        {id: 6, name: 'gaoba', age: '18'}
      ],
      class2110: [
        {id: 1, name: 'zhangsan', age: '18'},
        {id: 2, name: 'lisi', age: '18'},
        {id: 3, name: 'wangwu', age: '18'},
        {id: 4, name: 'zhaoliu', age: '18'},
        {id: 5, name: 'zhouqi', age: '18'},
        {id: 6, name: 'gaoba', age: '18'}
      ]
    }
  },
  methods: {
    del (sid) {
      console.log(sid)
    },
    sel (obj) {
      console.log(obj)
    }
  }
}
</script>

<style>
</style>
