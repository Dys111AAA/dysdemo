<template>
  <div id="search">
    <!-- v-model
      v-model就是:value和@input的结合
     是实时数据修改，因为子组件不能直接修改父组件的数据，所以报错 -->
    <!-- <input type="text" v-model="kw"> -->
    <!-- 解决方法1 -->
    <!-- <input type="text" :value="kw" @input="ipt"> -->
    <!-- 解决方法2 依然使用v-model监听 -->
    <input type="text" :value="kw" @input="ipt1">
  </div>
</template>

<script>
export default {
  name: 'search',
  props: {
    kw: String,
    value: String
  },
  data () {
    return {
      msg: '这是一个vue项目模板'
    }
  },
  methods: {
    ipt (e) {
      console.log(e.target._value)
      this.$emit('changeVal', e.target.value)
    },
    ipt1 (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style>
</style>
