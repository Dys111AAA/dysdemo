<template>
  <div id="classList">
    <ol class="title">
      <li>编号</li>
      <li>姓名</li>
      <li>年龄</li>
      <li><span @click="check">操作</span></li>
    </ol>
    <ul class="list">
      <li v-for="(item, i) in classArr" :key="item.id">
        <span class="xh">{{ i+1 }}</span>
        <span class="name">{{ item.name }}</span>
        <span class="age">{{ item.age }}</span>
        <!-- 默认作用域插槽 -->
        <!-- <slot :sid="item.id" sname="aaaa"></slot> -->
        <!-- 具名作用域插槽 -->
        <slot name="aa" :sid="item.id" sname="aaaa"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'classList',
  props: {
    classArr: {
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
    check () {
      console.log('点击了操作')
    }
  }
}
</script>

<style>
  li{list-style: none;}
  #classList{
    .title, .list li{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
    }
    .title{
      background: aqua;
    }
    .list li{
      text-align: center;
      /* & 在less里代表的是他的父级路径 */
      /* 在这表示.list li:nth-child(even) */
      /* even === 2n+1 */
      /* odd === 2n */
      &:nth-child(even){
        background: #dcdcdc;
      }
    }
  }
</style>
