import axios from 'axios'
import { Module } from 'vuex'
import { RootState } from '@/store/index'
import { PostModel } from '@/model/PostModel'

interface State {
  postList: Array<PostModel>
}
const post: Module<State, RootState> = {
  namespaced: true,
  state: { postList: [] },

  getters: { postData: state => state.postList },

  mutations: {
    setPostList(state, payload: Array<PostModel>) {
      state.postList = payload
    },
  },

  actions: {
    async getPostList({ commit }) {
      const { data } = await axios.get('/api/post/list').then(res => res)
      commit('setPostList', data)
    },
  },
}
export default post
