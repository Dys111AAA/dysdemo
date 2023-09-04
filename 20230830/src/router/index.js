import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/views/home/homePage'
import mySelf from '@/views/my/mySelf'
import modalPage from '@/views/page1/modalPage'
import refsPage from '@/views/page2/refsPage'

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
      name: 'mySelf',
      component: mySelf
    },
    {
      path: '/modal',
      name: 'modalPage',
      component: modalPage
    },
    {
      path: '/ref',
      name: 'refsPage',
      component: refsPage
    }
  ]
})
