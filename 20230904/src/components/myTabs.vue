<template>
  <div id="myTabs">
    <slot name="title">
      <li>编号</li>
      <li>图片</li>
      <li>名称</li>
      <li>标签</li>
    </slot>
    <ul class="list">
      <li v-for="(item, i) in tabList" :key="item.id">
        <div class="list1">{{ i+1 }}</div>
        <div class="list2">{{ item.img }}</div>
        <div class="list3">{{ item.name }}</div>
        <div class="list4">
          <p @dblclick="changeList(item, 'isShow', false)" v-if="item.isShow">{{ item.label }}</p>
          <input
            ref="show"
            @blur="changeList(item, 'isShow', true)"
            @change="changeList(item, 'label', $event.target.value)"
            @keyup.enter="changeList(item, 'isShow', true)"
             v-else
             v-focus
            type="text">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'myTabs',
  props: {
    tabList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      msg: '这是一个vue项目模板'
    }
  },
  methods: {
    changeList (obj, key, val) {
      this.$emit('changeShow', obj, key, val)
    }
  },
  computed: {
  }
}
</script>

<style>
  ol.title,ul.list li{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    background: #000;
    color: white;
  }
</style>
