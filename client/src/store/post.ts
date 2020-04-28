import axios from 'axios'
import { Module } from 'vuex'
import { RootState } from '@/store/index'
import { PostModel } from '@/model/PostModel'

interface State {
  postList: Array<PostModel>
  recentList: Array<PostModel>
}
const post: Module<State, RootState> = {
  namespaced: true,
  state: { postList: [], recentList: [] },

  getters: {
    postData: state => state.postList,
    recentData: state => state.recentList,
  },

  mutations: {
    setPostList(state, payload: Array<PostModel>) {
      payload.map((item, idx) => {
        idx <= 4 ? state.recentList.push(item) : state.postList.push(item)
      })
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
