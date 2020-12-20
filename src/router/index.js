import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

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
    name: 'SMMCase',
    component: () => import('../pages/SMMcase.vue'),
    props: true
  },
  {
    path: '/WEBUIs',
    name: 'WEBUIs',
    component: () => import('../pages/WEBUIs')
  },
  {
    path: '/WEBUIcase/:id',
    name: 'WEBUICase',
    component: () => import('../pages/WEBUIcase.vue'),
    props: true
  },
  {
    path: '/MobileUIs',
    name: 'MobileUIs',
    component: () => import('../pages/MobileUIs')
  },
  {
    path: '/MobileUIcase/:id',
    name: 'MobileUIcase',
    component: () => import('../pages/MobileUIcase.vue'),
    props: true
  },
  {
    path: '/BrandingCases',
    name: 'BrandingCases',
    component: () => import('../pages/BrandingCases')
  },
  {
    path: '/Brandingcase/:id',
    name: 'BrandingCase',
    component: () => import('../pages/BrandingCase.vue'),
    props: true
  },
  {
    path: '/Vacancy/:id',
    name: 'Vacancy',
    component: () => import('../pages/Vacancy.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


const DEFAULT_TITLE = 'Creatum';
router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router
