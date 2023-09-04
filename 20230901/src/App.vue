<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-link to="slot1">slot1</router-link>
    <router-link to="slot2">slot2</router-link>
    <router-link to="shopcar">shopcar</router-link>
    <router-link to="loading">loading</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{padding: 0;margin: 0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* 在全局的app.vue中定义loading类，这样所有的vue模板页面，都可以使用loading这个类 */
.loading::after{
    content: "";
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #383a42 url("./assets/loading.gif") no-repeat center;
    height: 100vh;
  }
</style>
