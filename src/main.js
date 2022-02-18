import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css' 
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

import { routes } from './routes/route'

const router = new VueRouter({
  mode: 'history',
  routes,
})

import { store } from './store/store'

new Vue({
  router, 
  store,
  render: h => h(App)
}).$mount('#app')
