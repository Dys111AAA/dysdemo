<template>
  <div class="homePage">
    <HelloWorld :msg="sonMsg" @sonClick="changeSonMsg"></HelloWorld>
    <JiShiBen></JiShiBen>
    <ButtonTabbar :active="1"></ButtonTabbar>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import JiShiBen from './children/jishiben.vue'
export default {
  name: 'homePage',
  components: {
    HelloWorld,
    JiShiBen
  },
  data () {
    return {
      sonMsg: '父组件给子组件传值了'
    }
  },
  methods: {
    changeSonMsg (val) {
      this.sonMsg = val
    }
  }
}
</script>

<style>
</style>
