<template>
  <div class="box">
    <h1>小黑记事本</h1>
    <div class="input_box">
      <div class="header">
        <input type="text" placeholder="请输入任务" v-model="val">
        <button class="submit" @click="addDataArr">添加任务</button>
      </div>
      <ul class="main">
        <li v-for="(item, i) in dataArr" :key="item.id">
          <span>{{ i+1 }}.</span>
          <span>{{ item.text }}</span>
          <span class="demo" @click="demo(item.id)">X</span>
        </li>
      </ul>
      <div class="booter">
        <span>合计：<span>{{ count }}</span></span>
        <span class="clearall" @click="clearall">清空任务</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notepad',
  data () {
    return {
      val: '',
      count: 2,
      dataArr: [
        {id: 1, text: '跑步锻炼20分钟'},
        {id: 2, text: '游泳锻炼20分钟'}
      ]
    }
  },
  methods: {
    addDataArr () {
      // console.log(11)
      var id = +new Date()
      // console.log(id)
      this.dataArr.unshift({id: id, text: this.val})
      this.count = this.dataArr.length
      this.val = ''
    },
    demo (id) {
      // console.log(22)
      this.dataArr = this.dataArr.filter(item => id !== item.id)
      this.count = this.dataArr.length
    },
    clearall () {
      this.dataArr = []
      this.count = this.dataArr.length
    }
  }
}
</script>

<style>
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
  }
</style>
