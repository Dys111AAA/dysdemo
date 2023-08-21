<template>
  <div class="box">
    <input type="text" v-model="obj.words">
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      obj: {
        words: ''
      }
    }
  },
  watch: {
    'obj.words' (newValue) {
      console.log(newValue)
    }
  }
}
</script>

<style>
</style>
