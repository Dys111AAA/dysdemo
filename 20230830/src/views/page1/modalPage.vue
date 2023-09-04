<template>
  <div id="modalPage">
    <button @click="isShow=true">显示模块框</button>
    <!-- 模态框 -->
    <quitModal :v.sync="isShow"></quitModal>
    <!-- <quitModal :v="isShow" @update:v="isShow = $event"></quitModal> -->
  </div>
</template>

<script>
import quitModal from '@/components/quitModal'
export default {
  name: 'modalPage',
  components: {
    quitModal
  },
  data () {
    return {
      isShow: true,
      msg: '这是一个vue项目模板'
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
