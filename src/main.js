// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import LazyLoad from 'vue-lazyload'
import 'lib-flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
Vue.use(LazyLoad, {
  loading: './assets/images/loading.gif'
})

router.beforeEach((to, from, next) => {
  // let scrollHeight = $(document).scrollTop()
  // console.log(scrollHeight)
  let token = window.localStorage.getItem('token')
  if (to.matched.some(record => record.meta.requireAuth) && (!token || token === '')) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath,
        from: from.fullPath
      }
    })
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    if (!localStorage.getItem('token') || localStorage.getItem('token') === '') {
      this.$store.state.isLogin = false
    } else {
      this.$store.state.isLogin = true
      this.$store.state.userName = localStorage.getItem('userName')
      this.$store.state.userId = localStorage.getItem('userId')
    }
  }
})
