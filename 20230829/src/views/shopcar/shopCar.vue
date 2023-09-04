<template>
  <div class="shopCar">
    <busD></busD>
    <ButtonTabbar :active="3"></ButtonTabbar>
  </div>
</template>

<script>
import busD from '@/components/busD'
export default {
  name: 'shopCar',
  components: {
    busD
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

<style>
</style>
