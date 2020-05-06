import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Redirected from './components/Redirected'

Vue.config.productionTip = false

const routes = [
  { path: '/redirected', component: Redirected }
]

const router = new VueRouter({routes})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
