import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/pages/home/Home'
import About from './components/pages/about/About'

Vue.use(VueRouter)

var router = new VueRouter({
  history: true,
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
})

/* eslint-disable no-unused-vars */
const app = new Vue({
  router
}).$mount('#app')
