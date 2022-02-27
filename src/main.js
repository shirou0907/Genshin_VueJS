import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import responsive from 'vue-responsive'
Vue.use(responsive)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css' 
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

import { routes } from './routes/route'

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    // always scroll to top
    return { x: 0, y: 0 }
  },
})

// router.beforeEach(() => {
//   window.scrollTo(0, 0)
//   // ...
// })

import { store } from './store/store'

new Vue({
  router, 
  store,
  render: h => h(App)
}).$mount('#app')
