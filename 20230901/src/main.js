// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.directive('loading', {
  'inserted' (el, binding) {
    binding.value ? el.classList.add('loading') : el.classList.remove('loading')
  },
  'update' (el, binding) {
    binding.value ? el.classList.add('loading') : el.classList.remove('loading')
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
