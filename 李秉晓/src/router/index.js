import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../views/index.vue'
import city from '../views/city.vue'
import count from '../views/count.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: index
  },
  {
    path: '/city',
    component: city
  },
  {
    path: '/count',
    component: count
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
