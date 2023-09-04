<template>
  <div id="productMain">
    <ol class="title" v-if="titleShow">
      <slot name="title">
        <h1>这是一个标题</h1>
      </slot>
    </ol>
    <div class="main">
      <goods v-for="item in proArr" :key="item.id" :obj="item"></goods>
    </div>
  </div>
</template>

<script>
import goods from '@/components/goods.vue'
export default {
  name: 'productMain',
  components: {
    goods
  },
  props: {
    proArr: {
      type: Array,
      default: () => []
    },
    titleShow: {
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
  }
}
</script>

<style>
  #productMain .main{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
