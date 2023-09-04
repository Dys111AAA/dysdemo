<template>
  <div class="myPage">
    <button @click="changeProvide">修改数据</button>
    <busA @changeVal="getVal"></busA>
    <busB :dataArr="dataArr" @demoArr="demo"></busB>
    <busC :dataArr="dataArr" @clearAll="clearAll"></busC>
    <ButtonTabbar :active="4"></ButtonTabbar>
  </div>
</template>

<script>
import busA from '@/components/busA.vue'
import busB from '@/components/busB.vue'
import busC from '@/components/busC.vue'
export default {
  name: 'myPage',
  data () {
    return {
      val: '',
      count: 2,
      dataArr: [
        {id: 1, text: '跑步锻炼20分钟'},
        {id: 2, text: '游泳锻炼20分钟'}
      ],
      color: 'red',
      user: {
        username: 'zhangsan',
        age: 18,
        sex: 1
      }
    }
  },
  // 共享给子孙组件的数据
  // 简单数据不会同步更新
  // 复杂数据可以同步更新，开发中，建议使用复杂数据共享
  provide () {
    return {
      color: this.color, // 简单数据
      user: this.user, // 复杂数据
      haha: this.haha
    }
  },
  components: {
    busA,
    busB,
    busC
  },
  methods: {
    getVal (val) {
      // console.log(val)
      let id = +new Date()
      this.dataArr.unshift({id: id, text: val})
    },
    clearAll (val) {
      console.log(val)
      this.dataArr = val
    },
    demo (val) {
      this.dataArr = val
    },
    changeProvide () {
      this.color = 'blue'
      this.user.username = 'lisi'
    },
    // 定义提供给子孙组件使用的方法
    haha () {
      console.log('使用父组件的haha事件')
    }
  }
}
</script>

<style>
</style>
