import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      name: 'Home',
      path: '/home',
      component: resolve => require(['@/pages/home/home'], resolve),
      meta: {
        isKeepAlive: true
      }
    },
    {
      path: '/sort',
      component: resolve => require(['@/pages/sort/sort'], resolve),
      children: [
        {
          path: '',
          redirect: '/sort/tags'
        },
        {
          path: '/sort/tags',
          component: resolve => require(['@/pages/sort/tags'], resolve)
        },
        {
          path: '/sort/products/:title/:sort',
          component: resolve => require(['@/pages/sort/sortProducts'], resolve),
          props: true,
          meta: {
            isKeepAlive: true
          }
        }
      ]
    },
    {
      path: '/shoppingCar',
      name: 'ShoppingCar',
      component: resolve => require(['@/pages/shoppingCar/shoppingCar'], resolve),
      meta: {
        requireAuth: true,
        isKeepAlive: false
      }
    },
    {
      path: '/my',
      name: 'My',
      component: resolve => require(['@/pages/my/my'], resolve),
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/detail/:id',
      component: resolve => require(['@/pages/detail/detail'], resolve),
      props: true,
      meta: {
        requireAuth: true,
        isKeepAlive: true
      }
    },
    {
      path: '/buy/:id',
      name: 'buy',
      component: resolve => require(['@/pages/buy/buy'], resolve),
      props: true,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/pages/login/login'], resolve)
    },
    {
      path: '/shop/:id',
      name: 'shop',
      component: resolve => require(['@/pages/shop/shop'], resolve),
      meta: {
        isKeepAlive: false
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.isKeepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})
