<template>
  <ul class="post-list">
    <li v-for="(item, idx) in post" :key="idx" :class="item.category">
      <router-link :to="`/post/detail/${encodeURI(item.title)}`">
        <div class="thumb-post">
          <img :src="categoryImg[item.category]" />
        </div>
        <div class="wrap-info">
          <span class="txt-category">{{categoryName[item.category]}}</span>
          <strong class="tit-post">{{item.title}}</strong>

          <!-- <span class="txt-date">{{new Date(item.createdAt)}}</span> -->
        </div>
      </router-link>
    </li>
  </ul>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { CATEGORY_THUMB, CATEGORY_NAME } from '../constants'

@Component
export default class PostList extends Vue {
  @Prop() post!: Array<any>
  public categoryImg: object = CATEGORY_THUMB
  public categoryName: object = CATEGORY_NAME

  created() {
    console.log(this.post)
  }
}
</script>
<style lang="scss" scoped>
.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
  grid-auto-flow: row dense;
  grid-gap: 10px;
  padding-bottom: 50px;
  li {
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.3s ease-out, transform 0.3s ease-out,
      opacity 0.2s ease-out;
    transition-delay: 0.1s;
    border-radius: 4px;
  }
  .thumb-post {
    img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
    }
  }
  .tit-post {
    display: block;
    overflow: hidden;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .txt-category {
    font-size: 12px;
    color: #555;
  }
  .wrap-info {
    overflow: hidden;
    position: relative;
    padding: 30px 15px 20px 15px;
  }
}
</style>
