import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
  ],
})
