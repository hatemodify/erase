import axios from 'axios'
import { Module } from 'vuex'
import { RootState } from '@/store/index'
import { PostModel } from '@/model/PostModel'
import { MESSAGE } from '@/constants'
import router from '@/router'

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
      state.recentList = payload.slice(0, 5)
      state.postList = payload.slice(5)
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
      const iconType = 'success'
      const msgTxt = '등록 완료'
      commit('setDimmedStatus', { iconType, msgTxt }, { root: true })
      // await axios.post(`/api/post/write`, postData).then(res => {
      //   if (res.status === 200) {

      //   }
      // })
    },
  },
}
export default post
