<template>
  <div class="content-inner">
    <div class="search-bar">
      <clock />
    </div>
    <post-list :post="postData" />
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { PostModel } from '../model/PostModel'
import { PostList, Clock } from '../components'

const post = namespace('Post')
@Component({
  components: {
    PostList,
    Clock,
  },
})
export default class Main extends Vue {
  @post.Getter
  public postData!: Array<PostModel>
  @post.Action
  public getPostList!: () => void
  created() {
    this.getPostList()
  }
}
</script>

<style lang="scss" scoped>
.content-inner {
  color: #fff;
}
.search-bar{
  overflow: hidden;
}
</style>