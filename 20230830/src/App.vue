<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/home">首页</router-link>
    <router-link to="/my">我的</router-link>
    <router-link to="/modal">模态框</router-link>
    <router-link to="/ref">refs</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
