<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <VueBtn></VueBtn>
    <div>{{ msg }}</div>
    <button @click="changeMsg">修改msg</button>
  </div>
</template>

<script>
// 引入组件
export default {
  name: 'HelloWorld',
  // props内的数据想要修改,必须通过父组件传值修改
  props: [
    'msg'
  ],
  // 注册组件
  components: {},
  data () {
    return {
    }
  },
  methods: {
    changeMsg () {
      // 把需要修改的值,传递给父组件,在父组件
      this.$emit('sonClick', '子组件想修改一下值')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
