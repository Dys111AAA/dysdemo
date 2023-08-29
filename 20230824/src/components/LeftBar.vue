<template>
  <ul class="bar">
    <li>
      <h2>标题1</h2>
      <a href="#/">首页</a>
      <a href="">我的</a>
      <a href="">分类</a>
      <a href="#/shopcar">购物车</a>
    </li>
    <li>
      <h2>标题2</h2>
      <a href="">搜索页</a>
      <a href="#/shopcar/detail">详情页</a>
      <a href="">搜索页</a>
      <a href="">搜索页</a>
    </li>
  </ul>
</template>

<script> 
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul.bar {
  width: 100%;
  padding: 0;
  height: 100vh;
  border-right: 1px solid black;
}
.bar li {
  text-align: left;
  list-style-type: none;
}
.bar li a {
  display: block;
  color: #42b983;
}
</style>
