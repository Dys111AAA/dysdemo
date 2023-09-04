import Vue from 'vue'
import Router from 'vue-router'
import vLoading from '@/views/vLoading/vLoading'
import slotPage1 from '@/views/slotPage1/slotPage1'
import slotPage2 from '@/views/slotPage2/slotPage2'
import shopCar from '@/views/shopcar/shopcar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/slot1',
      name: 'slotPage1',
      component: slotPage1
    },
    {
      path: '/slot2',
      name: 'slotPage2',
      component: slotPage2
    },
    {
      path: '/shopcar',
      name: 'shopCar',
      component: shopCar
    },
    {
      path: '/loading',
      name: 'vLoading',
      component: vLoading
    }
  ]
})
