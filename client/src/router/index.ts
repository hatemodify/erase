import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { Main, Write } from '@/views'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/post/wirte',
    name: 'Write',
    component: Write,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
