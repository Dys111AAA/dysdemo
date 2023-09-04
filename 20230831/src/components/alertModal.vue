<template>
  <div id="alertModal" v-show="visible">
    <div class="modal">
      <div class="dialogTitle">
        友情提示：
        <input type="">
      </div>
      <div class="dialogCenter">
        <slot></slot>
      </div>
      <div class="dialogFooter">
        <button @click="quit(false)">取消</button>
        <button @click="quit(true)">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'alertModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      msg: '这是一个vue项目模板'
    }
  },
  methods: {
    quit (bool) {
      // 子组件 调用父组件的自定义方法, 传值bool
      this.$emit('quit', bool)
    }
    // quitEsc () {
    //   this.$emit('update:visible', false)
    // },
    // quitYes () {
    //   // 确认 父组件应该清空user
    //   this.quitEsc()
    // }
  }
}
</script>

<style>
  #alertModal{
    position: fixed;
    background: rgba(0, 0, 0, .5);
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  #alertModal .modal{
    width: 60vw;
    height: 300px;
    background: #fff;
    padding: 0 2vw;
    display: flex;
    flex-direction: column;
  }
  #alertModal .dialogTitle{
    border-bottom: 1px solid #000;
    height: 50px;
    line-height: 50px;
  }
  #alertModal .dialogCenter{
    flex: 1;
    /* background: green; */
  }
  #alertModal .dialogFooter{
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #000;
    text-align: right;
  }
  #alertModal .dialogFooter button{
    margin-left: 20px;
    height: 40px;
    width: 80px;
  }
</style>
