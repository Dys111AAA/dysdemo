<template>
  <div id="tabBar">
    <div :class="{'active':active==1}">
      <router-link to="/home">
        <img v-show="active==1" src="../../assets/home1.png" alt="">
        <img v-show="active!=1" src="../../assets/home2.png" alt="">
        <span>首页</span>
      </router-link>
    </div>
    <div :class="{'active':active==2}">
      <router-link to="/category">
        <img v-show="active==2" src="../../assets/cate1.png" alt="">
        <img v-show="active!=2" src="../../assets/cate2.png" alt="">
        <span>分类</span>
      </router-link>
    </div>
    <div :class="{'active':active==3}">
      <router-link to="/shopcar">
        <img v-show="active==3" src="../../assets/shop1.png" alt="">
        <img v-show="active!=3" src="../../assets/shop2.png" alt="">
        <span>购物车</span>
      </router-link>
    </div>
    <div :class="{'active':active==4}">
      <router-link to="/my">
        <img v-show="active==4" src="../../assets/my1.png" alt="">
        <img v-show="active!=4" src="../../assets/my2.png" alt="">
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  components: {},
  // 接收属性参数值
  props: {
    active: {
      type: Number,
      required: true,
      validator (value) {
        console.log(value)
        if (!isNaN(Number(value))) { // 是数字走这里
          return true
        } else {
          console.error('你必须为props active传递一个数字值')
          return false
        }
      }
    }
  },
  data () {
    return {
      msg: '这是一个vue项目模板'
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
  #tabBar{
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 80px;
    background: white;
    border-top: 1px solid #dcdcdc;
    width: 100%;
    div{
      width: 80px;
      a{
        color: #666;
        text-decoration: none;
        img{
          width: 30px;
          display: block;
          margin: 0 auto;
          margin-bottom: 5px;
        }
        span{
          display: block;
          text-align: center;
        }
      }
    }
  }
  .active span{
    color: red;
  }
</style>
