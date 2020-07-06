import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import Post from './post'
Vue.use(Vuex)

export interface RootState {
  data: any
  dimmed: boolean
  iconType: string
  msgTxt: string
}

const store: StoreOptions<any> = new Vuex.Store({
  state: {
    data: '',
    dimmed: false,
    iconType: '',
    msgTxt: '',
  },
  getters: {
    dimmedStatus: state => state.dimmed,
    getMsgTxt: state => state.msgTxt,
    getIconType: state => state.iconType,
  },
  mutations: {
    setDimmedStatus: (state, payload: any) => {
      if (payload) {
        state.iconType = payload.iconType
        state.msgTxt = payload.msgTxt
      }

      state.dimmed = !state.dimmed
    },
  },
  actions: {},
  modules: {
    Post,
  },
})

export default store
