<template>
  <div class="box">
    <a href="#/shopcar/detail">详情页</a>
    <ul v-if="shopcar.length">
      <li v-for='item in shopcar' :key="item.id">
        <input type="checkbox" @click="changeCheckbox(item.id)" v-model="item.isSelect">
        <span>{{ item.name }}</span>
        <em>￥{{ item.price }}</em>
        <span>
          <i @click="changeNum(item.id,'-')">-</i>
          <ins>{{ item.num }}</ins>
          <i @click="changeNum(item.id,'+')">+</i>
        </span>
        <span>{{ (item.price*1 * item.num*1).toFixed(2) }}</span>
        <span @click="clear(item.id)">删除</span>
      </li>
    </ul>
    <h1 v-else>购物车空空如也……</h1>
    <p>
      <input type="checkbox" v-model="checkboxAll">
      总共买了{{count}}件商品 总计：{{ money.toFixed(2) }}元
    </p>
  </div>
</template>

<script>
const list = [
        {id: 1, name: '商品1', price: '30.12', num: '5', isSelect: true},
        {id: 2, name: '商品2', price: '28.12', num: '4', isSelect: false},
        {id: 3, name: '商品3', price: '65.12', num: '19', isSelect: true},
        {id: 4, name: '商品4', price: '5.12', num: '2', isSelect: true}
      ]
export default {
  // 定义组件的名称
  name: 'shopCar',
  data () {
    return {
      num: 0,
      timer: null,
      numTimer: null,
      shopcar: JSON.parse(localStorage.getItem('shopcar')) || list
    }
  },
  watch: {
    num: {
      deep: true,//深度监听
      immediate: true,//初始化时，执行一次
      handler (newVal) {//watch的监听函数 handler
        console.log(newVal)
      }
    },
    shopcar: {
      deep: true,
      immediate: true,
      handler (nV) {
        console.log(nV)
        localStorage.setItem('shopcar', JSON.stringify(nV))
      }
    }
  },
  methods: {
    changeNum (id,temp) {
      var val = 1;
      if (temp === '-') {
        val = -1
      }
      var arr = this.shopcar.filter(item => {
        if (item.id == id){
          item.num = item.num*1 + val
          if(!item.num) item.num = 1
          if(!item.isSelect) item.isSelect = true
          return true
        }else {
          return false
        }
      })
      // 之后再数量1秒内没有被修改,才提交数据到数据库中
      clearTimeout(this.numTimer)
      this.numTimer = setTimeout(() => {
        // 提交网络请求,修改数据到数据库
        console.log(arr)
      },1000)
      
    },
    // 商品复选框的单击事件
    changeCheckbox (id) {
      console.log("发生了点击",id);
      // 防抖:防止用户重复点击复选框,造成大量网络请求
      // 我们需要在一定时间内,时间没有被触发,才发送网络请求
      clearTimeout(this.timer)
      this.timer = setTimeout(()=>{
        var arr = this.shopcar.filter(item => {
          if (item.id === id) {
            return true
          }
          
        })
        // 发送网络请求,修改数据到数据库
        // axios ----->promise
        console.log(arr)
      },1000)
    },
    clear (id) {
      this.shopcar = this.shopcar.filter(item => item.id !== id)
    }
  },
  computed: {
    checkboxAll: {
      get () {
        if(this.shopcar.every(item => item.isSelect)) {
          return true
        }else {
          return false
        }
      },
      set (value) {
        this.shopcar.forEach(item => item.isSelect = value)
      }
    },
    count () { //购买商品的总数量
      // 计算属性中 this 指向当前的vue 实例
      return this.shopcar.reduce((num,item) => {
        // console.log(item)
        if(item.isSelect === true){
          num += item.num*1
        }
        return num
      },0)
    },
    money () {
      return this.shopcar.reduce((num,item) => {
        if(item.isSelect === true) {
          num += item.price*1 * item.num*1
        }
        return num
      }, 0)
    }
  }
}
</script>

<style>
  .box li{
    display: flex;
    width: 600px;
    justify-content: space-between;
    height: 30px;
    line-height: 30px;
  }
</style>