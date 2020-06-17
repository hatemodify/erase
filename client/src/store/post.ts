import axios from 'axios'
import { Module } from 'vuex'
import { RootState } from '@/store/index'
import { PostModel } from '@/model/PostModel'

interface State {
  postList: Array<PostModel>
  recentList: Array<PostModel>
  postDetail: {}
}
const post: Module<State, RootState> = {
  namespaced: true,
  state: { postList: [], recentList: [], postDetail: {} },

  getters: {
    postData: state => state.postList,
    recentData: state => state.recentList,
    detail: state => state.postDetail,
  },

  mutations: {
    setPostList(state, payload: Array<PostModel>) {
      payload.filter((item, idx) => {
        idx > 4
          ? (state.postList.push(item))
          : (state.recentList.push(item))
      })
    },
    setPostDetail(state, payload: any) {
      state.postDetail = payload
    },
    resetDetail(state) {
      state.postDetail = {}
    },
  },

  actions: {
    async getPostList({ commit }) {
      const { data } = await axios.get('/api/post/list').then(res => res)
      commit('setPostList', data)
    },
    async getPostDetail({ commit }, title: string) {
      const { data } = await axios
        .get(`/api/post/detail/${title}`)
        .then(res => res)
      commit('setPostDetail', data)
    },
    async writePost({ commit }, postData) {
      console.log(postData)
      await axios.post(`/api/post/write`, postData).then(res => {
        console.log(res)
      })
    },
  },
}
export default post
