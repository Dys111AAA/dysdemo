<template>
  <!-- 渲染 -->
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input autofocus id="inp" type="text" v-model="val">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {//创建中
    return {
      val: ''
    }
  },
  beforeCreate () {
    console.log("创建前")
  },
  created () {
    console.log("创建结束")
  },
  beforeMount () {
    console.log("挂载前")
  },
  mounted () {
    console.log("挂载结束")
    document.querySelector("#inp").style.border = '1px solid red'
  },
  beforeUpdate () {
    console.log("修改前")
  },
  updated () {
    console.log("修改结束")
  },
  beforeDestroy () {
    console.log("销毁前")
  },
  destroyed () {
    console.log("销毁结束")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
