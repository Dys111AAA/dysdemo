import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/views/home/homePage'
import cateGory from '@/views/category/cateGory'
import shopCar from '@/views/shopcar/shopCar'
import mySelf from '@/views/my/mySelf'
import detailPage from '@/views/details/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/category',
      name: 'cateGory',
      component: cateGory
    },
    {
      path: '/shopcar',
      name: 'shopCar',
      component: shopCar
    },
    {
      path: '/my',
      name: 'mySelf',
      component: mySelf
    },
    {
      // 动态路由
      path: '/details/:pid',
      name: 'detailPage',
      component: detailPage
    }
  ],
  // 自定义模糊查询选中类名
  linkActiveClass: 'router-active',
  // 自定义精确查询选中类名
  linkExactActiveClass: 'rou-ac'
})
