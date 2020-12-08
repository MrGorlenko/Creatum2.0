import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
// import HowWeDo from '../views/HowWeDo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/HowWeDo',
    name: 'HowWeDo',
    component: () => import('../views/HowWeDo.vue')
  },
  {
    path: '/ForWho',
    name: 'ForWho',
    component: () => import('../views/ForWho.vue')
  },
  {
    path: '/Crew',
    name: 'Crew',
    component: () => import('../views/Crew.vue')
  },
  {
    path: '/SMMcases',
    name: 'SMMcases',
    component: () => import('../pages/SMMcases.vue')
  },
  {
    path: '/SMMcase/:id',
    name
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
