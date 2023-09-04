<template>
  <div id="refsPage">
    @/views/page2/refsPage.vue
    <refsInstruct></refsInstruct>
  </div>
</template>

<script>
import refsInstruct from '@/components/refsInstruct.vue'
export default {
  name: 'refsPage',
  components: {
    refsInstruct
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
