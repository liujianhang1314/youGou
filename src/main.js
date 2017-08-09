// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vue2Filters from 'vue2-filters'

import ElementUI from 'element-ui'

import axios from 'axios'
import Navigation from 'vue-navigation'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint);

Vue.use(Navigation, {router})

Vue.use(Vue2Filters)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
