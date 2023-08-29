<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
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
ul{margin: 0;padding: 0;}
  li{list-style: none;}
  body{
    background: #f4f4f4;
  }
  .box{
    background: #fff;
    width: 500px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
  }
  .input_box{
    width: 100%;
  }
  .header{
    height: 80px;
    border: 2px solid red;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    overflow: hidden;
  }
  .header input{
    width: 70%;
    height: 100%;
    border: none;
    outline: none;
    color: #ccc;
    box-sizing: border-box;
    font-size: 20px;
    text-indent: 1em;
  }
  .submit{
    background: red;
    width: 30%;
    height: 100%;
    box-sizing: border-box;
    border: none;
    color: #fff;
    font-size: 20px;
  }
  .main li{
    display: flex;
    height: 50px;
    line-height: 50px;
    color: #aaa;
    border-bottom: 1px solid #ddd;
  }
  .main li span:first-child{
    margin-right: 20px;
  }
  .main li:hover .demo{
    display: block;
  }
  .demo{
    margin-left: auto;
    color: red;
    display: none;
  }
  .booter{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
</style>
