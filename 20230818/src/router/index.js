import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Preload from '@/view/preload/preload'
import Index from '@/view/index/index'
import Login from '@/view/login/login'
import vFor from '@/view/vfor/index'
import vModel from '@/view/vmodel/index'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'preload',
    component: Preload
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/index',
    name: 'index',
    component: Index
  },
  {
    path: '/vfor',
    name: 'vfor',
    component: vFor
  },
  {
    path: '/vmodel',
    name: 'vmodel',
    component: vModel
  }
  ]
})
