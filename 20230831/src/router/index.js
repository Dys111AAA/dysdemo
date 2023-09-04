import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/views/home/homePage'
import myPage from '@/views/my/mySelf'

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
      path: '/my',
      name: 'myPage',
      component: myPage
    }
  ]
})
