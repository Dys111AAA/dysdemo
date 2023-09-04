<template>
  <div id="refsInstruct">
    @/components/refsInstruct.vue
    <div>
      <button @click="upDateShow">修改</button>
      <div v-show="isShow">
        <input type="text" id="aaa" ref="aaa">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'refsInstruct',
  data () {
    return {
      msg: '这是一个vue项目模板',
      isShow: false
    }
  },
  mounted () {
    // querySelector还是全局搜索标签
    // document.querySelector('#aaa').focus()
    // 避免整个页面搜索,可以使用ref为元素定义名称
    // 通过使用this.$refs.名字 获取元素
  },
  methods: {
    upDateShow () {
      this.isShow = true
      // vue是异步更新,需要等待页面全部更新完毕后,才能执行dom操作
      // 所以直接使用this.$refs.aaa.focus()是不能获取焦点的
      // 可以通过nextTick()操作,即可获取焦点
      this.$nextTick(() => {
        this.$refs.aaa.focus()
      })
    }
  }
}
</script>

<style>
</style>
