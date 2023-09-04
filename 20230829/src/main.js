// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入组件
import vueBtn from './components/vueButton.vue'
import ButtonTabbar from './components/ButtonTabbar/tabBar.vue'

// 注册成全局组件
Vue.component('VueBtn', vueBtn)
Vue.component('ButtonTabbar', ButtonTabbar)

const bus = new Vue()
Vue.prototype.$bus = bus

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
