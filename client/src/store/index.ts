import Vue from 'vue'
import Vuex from 'vuex'
import User from './post'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User,
  },
})

export default store
