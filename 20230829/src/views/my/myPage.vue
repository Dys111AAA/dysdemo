<template>
  <div class="myPage">
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
      ]
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
    }
  }
}
</script>

<style>
</style>
