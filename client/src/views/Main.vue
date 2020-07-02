<template>
  <div class="content-inner">
    <search />
    <h2 class="tit-section">recent post</h2>
    <recent-list :post="recentData" />
    <template v-if="postData.length >= 1">
      <h2 class="tit-section">post List</h2>
      <post-list :post="postData" />
    </template>
    <router-link to="/post/write" style="position:absolute;bottom:100px;right:100px;">write</router-link>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { PostModel } from '../model/PostModel'
import { PostList, RecentList, Search } from '../components'

const post = namespace('Post')
@Component({
  components: {
    PostList,
    Search,
    RecentList,
  },
})
export default class Main extends Vue {
  @post.Getter
  public postData!: Array<PostModel>
  @post.Getter
  public recentData!: Array<PostModel>
  @post.Action
  public getPostList!: () => void
  created() {
    this.getPostList()
  }
}
</script>

<style lang="scss" scoped>
.tit-section {
  color: #373d40;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 25px 0;
  text-align: left;
}
</style>