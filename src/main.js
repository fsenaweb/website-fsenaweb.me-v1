// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueHead from 'vue-head'
import VueFullPage from 'vue-fullpage.js'
import Toaster from 'v-toaster'

import 'v-toaster/dist/v-toaster.css'
Vue.use(Toaster, {timeout: 4000})
Vue.use(VueFullPage)
Vue.use(VueHead)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
