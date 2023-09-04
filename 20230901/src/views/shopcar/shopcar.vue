<template>
  <div id="shopcar">
    <shopcarHead>
      <template #number>
        <th>编号</th>
      </template>
      <template #image>
        <th>图片</th>
      </template>
      <template #name>
        <th class="name">名称</th>
      </template>
      <template #label>
        <th>标签</th>
      </template>
    </shopcarHead>
  </div>
</template>

<script>
import shopcarHead from '@/components/shopcarHead.vue'
import shopcarBody from '@/components/shopcarBody.vue'
export default {
  name: 'shopcar',
  components: {
    shopcarHead,
    shopcarBody
  },
  data () {
    return {
      msg: '这是一个vue项目模板',
      dataArr: [
        {id: 101, name: 'zhangsan', age: '18'},
        {id: 102, name: 'lisi', age: '18'},
        {id: 103, name: 'wangwu', age: '18'},
        {id: 104, name: 'zhaoliu', age: '18'},
        {id: 105, name: 'zhouqi', age: '18'},
        {id: 106, name: 'gaoba', age: '18'}
      ]
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
