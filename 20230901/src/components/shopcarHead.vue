<template>
  <div id="shopcarHead">
    <table>
      <thead>
        <slot name="number"></slot>
        <slot name="image"></slot>
        <slot name="name"></slot>
        <slot name="label"></slot>
      </thead>
      <tbody>
        <td v-for="(item, index) in shopList" :key="index"></td>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'shopcarHead',
  props: {
    shopList: {
      type: Array,
      default: () => {
        return []
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
  table{
    width: 700px;
    margin: 0 auto;
    thead{
      display: flex;
      justify-content: space-between;
      background: #ddd;
      height: 50px;
      align-items: center;
      th{
        width: 80px;
      }
      .name{
        flex: 1;
      }
    }
  }
</style>
