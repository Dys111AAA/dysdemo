<template>
  <div class="vmodel">
    <div class="user">
      <label for="">
        用户名：
        <input type="text" v-model="user.name" placeholder="请输入用户名">
      </label>
    </div>
    <div class="pwd">
      <label for="">
        密码：
        <input type="password" v-model="user.pwd" placeholder="请输入密码">
      </label>
    </div>
    <div>
      <button @click="submit">登录</button>
    </div>
    <div>
      <ul>
        <li v-for="(item,index) in dataArr" :key="index">
          <!-- <img :src="item.img" alt="">-->
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'vmodel',
  data () {
    return {
      user: {
        name: '',
        pwd: ''
      },
      dataArr: []
    }
  },
  methods: {
    submit () {
      console.log(this.user)
      console.log($)
      $.ajax({
        url: 'http://82.157.191.232:8090/vuedemo/banner',
        success: (res) => {
          console.log(res)
          this.dataArr = res.data
        }
      })
    }
  }
}
</script>

<style>
</style>
