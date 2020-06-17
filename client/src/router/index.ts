import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { Main, Write, Detail } from '@/views'
import store from '@/store'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    meta: {
      transitionName: 'perspective',
    },
  },
  {
    path: '/post/write',
    name: 'Write',
    component: Write,
  },
  {
    path: '/post/detail/:title',
    name: 'Detail',
    component: Detail,
    // beforeEnter(to, from, next){
    //   store.dispatch('Post/getPostDetail', to.params.title)
    //   next()
    // },
    meta: {
      transitionName: 'slide-up',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
