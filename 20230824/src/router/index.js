// 封装一个路由模块
// 引入vue
import Vue from "vue"
// 引入路由模块
import VueRouter from "vue-router"
// 安装注册 ----安装到vue里
Vue.use(VueRouter) //在vue中初始化一下vue-router

// 引入组件模块
import Index from "@/views/index/index"
import shopCar from "@/views/shopcar/shopcar"
import Detail from "@/views/detail/detail"
const router = new VueRouter({
  // 路由组
  routes: [
    {
      // 当前访问路由的路径
      path: '/',
      // 路由分配给页面的名字,唯一
      name: 'PageIndex',
      // 路由访问的组件页面
      component: Index
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: shopCar,
      // props: '',
      children: [
        {path:'/detail',name:'PageDetail',component: Detail}
      ]
    }
  ]
})

// 导出模块
export default router