import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/views/home/homePage'
import shopCar from '@/views/shopcar/shopCar'
import cateGory from '@/views/category/cateGory'
import myPage from '@/views/my/myPage'

Vue.use(Router)

export default new Router({
  routes: [
    // 重定向位置,当用户访问/的时候,让页面跳转到home页面
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
      path: '/shopcar',
      name: 'shopCar',
      component: shopCar
    },
    {
      path: '/category',
      name: 'cateGory',
      component: cateGory
    },
    {
      path: '/my',
      name: 'myPage',
      component: myPage
    }
  ]
})
