import Vue from 'vue'
import Vuex, { StoreOptions, ActionContext } from 'vuex'
import Post from './post'
Vue.use(Vuex)

export interface RootState {}

const store: StoreOptions<any> = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Post,
  },
})

export default store
