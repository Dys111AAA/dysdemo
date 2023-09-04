<template>
  <div class="goods" v-if="Object.keys(obj).length > 0">
    <router-link :to="'/details/' + obj.id">
      <img :src="path+obj.img_cover" alt="">
      <span class="title">
        {{ obj.name }}
      </span>
      <span class="price">
        {{ obj.money_now }}
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'goodsCom',
  props: {
    obj: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      msg: '这是一个vue项目模板',
      path: 'http://82.157.191.232:8090/images/goods/'
    }
  },
  methods: {
  }
}
</script>

<style>
  .goods{
    /* width: 90%; */
    height: 500px;
  }
  @media screen and (max-width:576px){
    .goods{width: 90%;}
  }
  @media screen and (min-width:576px){
    .goods{width: 49%;}
  }
  @media screen and (min-width:768px){
    .goods{width: 33%;}
  }
  @media screen and (min-width:992px){
    .goods{width: 24%;}
  }
  .goods a{
    display: flex;
    flex-direction: column;
  }
  .goods a img{
    width: 80%;
    display: block;
    margin: 0 auto;
  }
</style>
