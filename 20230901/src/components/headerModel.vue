<template>
  <div id="headerModel">
    <div class="left">
      <slot name="left">
        <!-- 可以为插槽定义默认内容（后备内容），当插入内没有传值的时候，使用后备内容 -->
        <span @click="back">&lt;</span>
      </slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerModel',
  data () {
    return {
      msg: '这是一个vue项目模板'
    }
  },
  methods: {
    back () {
      // history.back() // 后退
      // history.forward() // 前进
      history.go(-1) // 前进或后退 +-整数
    }
  }
}
</script>

<style lang="less">
  #headerModel{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #000;
    margin-bottom: 10px;
    align-items: center;
    background: antiquewhite;
    height: 50px;
    .left{
      width: 70px;
      background: aqua;
    }
    .center{
      flex: 1;
      margin: 0 5px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .right{
      background: pink;
      width: 70px;
    }
  }
</style>
