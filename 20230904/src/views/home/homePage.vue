<template>
  <div id="homePage">
    <myTabs :tabList="listArr" @changeShow="changeListArr">
      <!-- <template #slot1>slot1</template>
      <template #slot2>slot2</template>
      <template #slot3>slot3</template>
      <template #slot4>slot4</template> -->
      <template #title>
        <ol>
          <li v-for="(item, i) in ['slot1', 'slot2', 'slot3', 'slot4']" :key="i">{{ item }}</li>
        </ol>
      </template>
    </myTabs>
    <productMain :proArr="goodsArr" :titleShow="true"></productMain>
    <tabbar></tabbar>
  </div>
</template>

<script>
import axios from 'axios'
import myTabs from '@/components/myTabs.vue'
import tabbar from '@/components/tabbar/tabbar'
import productMain from '@/components/productMain'
export default {
  name: 'homePage',
  components: {
    myTabs,
    tabbar,
    productMain
  },
  data () {
    return {
      msg: '这是一个vue项目模板',
      listArr: [
        {id: 1, img: '1.jpg', name: '这是一个商品1', label: '茶具', isShow: true},
        {id: 2, img: '2.jpg', name: '这是一个商品2', label: '男鞋', isShow: true},
        {id: 3, img: '3.jpg', name: '这是一个商品3', label: '服饰', isShow: true},
        {id: 4, img: '4.jpg', name: '这是一个商品4', label: '家电', isShow: true},
        {id: 5, img: '5.jpg', name: '这是一个商品5', label: '数码产品', isShow: true}
      ],
      goodsArr: []
    }
  },
  created () {
    this.getGoods()
  },
  methods: {
    changeListArr (obj, key, val) {
      console.log(obj, key, val)
      this.listArr.map(item => {
        if (obj.id === item.id) {
          item[key] = val
        }
      })
    },
    async getGoods () {
      const res = await axios.get('http://82.157.191.232:8090/vuedemo/get_goods', {
        params: {
          page: 1,
          pagesize: 10
        }
      })
      console.log(res)
      this.goodsArr = [...this.goodsArr, ...res.data.data]
    }
  }
}
</script>

<style>
  ol{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    background: #000;
    color: white;
  }
</style>
