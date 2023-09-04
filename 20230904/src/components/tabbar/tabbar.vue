<template>
  <div id="tabbar">
    <div class="home">
      <router-link to="/home">首页</router-link>
    </div>
    <div class="category">
      <router-link to="/category">分类</router-link>
    </div>
    <div class="shopcar">
      <router-link to="/shopcar">购物车</router-link>
    </div>
    <div class="my">
      <router-link to="/my">我的</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  data () {
    return {
      msg: '这是一个vue项目模板'
    }
  },
  methods: {
  }
}
</script>

<style>
  #tabbar{
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    align-items: center;
    background: beige;
    border-top: 1px solid #000;
    justify-content: space-around;
  }
  /* 模糊查询 */
  /* #tabbar a.router-link-exact-active{
    color: red;
  } */
  /* 精确查询 */
  #tabbar a.router-active{
    color: red;
    font-weight: 700  ;
  }
</style>
