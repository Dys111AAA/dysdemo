<template>
  <div id="shopcarBody">
    <ul>
      <li>
        <slot name="number"></slot>
      </li>
      <li>
        <slot name="image"></slot>
      </li>
      <li>
        <slot name="name"></slot>
      </li>
      <li>
        <slot name="label"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'shopcarBody',
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
