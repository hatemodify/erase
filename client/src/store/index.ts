import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import Post from './post'
Vue.use(Vuex)

export interface RootState {
  data: any
}

const store: StoreOptions<any> = new Vuex.Store({
  state: {
    data: '',
  },
  mutations: {},
  actions: {},
  modules: {
    Post,
  },
})

export default store
