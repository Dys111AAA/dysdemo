import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import Index from "@/views/index/index"
import MyView from "@/views/my/my"

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Index,
      name: 'PageIndex'
    },
    {
      path: '/my',
      component: MyView,
      name: 'PageMy'
    }
  ]
})