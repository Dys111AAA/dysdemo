<template>
  <div id="mySelf">
    <div class="myDetails">
      <div class="">
        <div class="touxiang">
          <img src="" alt="">
        </div>
        <div class="myMsg">
          <!-- 登录盒子 -->
          <div v-if="user">
            <div>
              <h2 class="tite">姓名</h2>
              <div @click="visible = true">退出登录</div>
            </div>
          </div>
          <!-- 未登录盒子 -->
          <div v-else>
            <div>
              <router-link to="/login">去登录</router-link>
              <button @click="login">去登录</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <alertModal ref="demo1" :visible="visible" @quit="quitUser">
      <p>你确定要退出吗？</p>
    </alertModal>
  </div>
</template>

<script>
import alertModal from '@/components/alertModal.vue'
export default {
  name: 'mySelf',
  components: {
    alertModal
  },
  data () {
    return {
      msg: '这是一个vue项目模板',
      // 退出登录模态框显示
      visible: false,
      user: {
        name: 'zhangsan',
        tel: 124435435
      }
    }
  },
  methods: {
    quitUser (bool) {
      this.visible = false
      if (bool) {
        this.user = null
      }
      console.log(this.$refs)
    },
    login () {
      this.user = {
        name: 'zhangsan',
        tel: 124435435
      }
    }
  }
}
</script>

<style>
</style>
