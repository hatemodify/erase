<template>
  <transition appear>
    <div class="content-inner">
      <article class="post-detail">
        <header class="header-post">
          <h2 class="tit-post">{{detail.title}}</h2>
        </header>
        <div class="post-contents" v-html="detail.contents"></div>
      </article>
    </div>
  </transition>
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
  public detail!: PostModel
  @post.Mutation
  public resetDetail: () => void
  @post.Action
  public getPostDetail!: (title: string) => void
  created() {
    this.getPostDetail(this.$route.params.title)
  }
  destroyed() {
    this.resetDetail()
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade-in {
  opacity: 1;
}
</style>