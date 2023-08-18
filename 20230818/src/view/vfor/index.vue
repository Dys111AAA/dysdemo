<template>
  <div class="vfor">
    <ul>
      <!-- key起到让页面的元素，不被元素复用的作用 -->
      <!-- 当删除一个元素的时候，如果有指定key，则会把key对应的元素直接从dem tree（dom树）上销毁 -->
      <li v-for="(item, index) in arr" :key="item.id">
        <span>{{index}}</span>
        <span>{{item.name}}</span>
        <span>{{item.auther}}</span>
        <span @click="del(item.id)">删除</span>
      </li>
    </ul>
  </div>
</template>

<script>
// import 导入组件
export default {
  name: 'vfor',
  components: {
  },
  data () {
    return {
      arr: [
        {id: 1, name: '红楼梦', auther: '曹雪芹'},
        {id: 2, name: '西游记', auther: '吴承恩'},
        {id: 3, name: '水浒传', auther: '施耐庵'},
        {id: 4, name: '三国演义', auther: '罗贯中'}
      ]
    }
  },
  methods: {
    del (temp) {
      this.arr = this.arr.filter(item => item.id !== temp)
    }
  }
}
</script>

<style>
</style>
