import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import Redirected from './components/Redirected'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '*', redirect: "/" },
  { path: '/', component: Home },
  { path: '/redirected', component: Redirected }
]

const router = new VueRouter({routes})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
