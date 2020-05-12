<template>
  <ul class="post-list">
    <li v-for="(item, idx) in post" :key="idx" :class="item.category">
      <router-link to>
        <strong class="tit-post">{{item.title}}</strong>
        <div class="thumb-post">
          <img :src="categoryImg[item.category]" />
        </div>
      </router-link>
    </li>
  </ul>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { CATEGORY_THUMB } from '../constants'

@Component
export default class PostList extends Vue {
  @Prop() post!: Array<any>
  public categoryImg: object = CATEGORY_THUMB

  created() {
    console.log(this.post)
  }
}
</script>
<style lang="scss" scoped>
.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-flow: row dense;
  grid-gap: 10px;
  padding-bottom: 50px;
  li {
    float: left;
  }
}
</style>
