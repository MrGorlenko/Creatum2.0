import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import VueSplide from '@splidejs/vue-splide'
import VueScrollTo from 'vue-scrollto'
import Anime from 'animejs';
import WOW from 'wow.js'

Vue.use(VueScrollTo)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use( VueSplide );
Vue.use(BootstrapVue);
Vue.use(Anime);
new WOW().init();
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



