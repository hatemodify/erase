<template>
  <ul class="recent-list">
    <li v-for="(item, idx) in post" :key="idx" :class="item.category">
      <router-link :to="`/post/detail/${encodeURI(item.title)}`">
        <div class="wrap-info">
          <strong class="tit-post">{{item.title}}</strong>
          <span class="txt-category">{{item.category}}</span>
        </div>
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
export default class RecentList extends Vue {
  @Prop() post!: Array<any>
  public categoryImg: object = CATEGORY_THUMB
}
</script>
<style lang="scss" scoped>
.recent-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: row dense;
  grid-gap: 10px;
  padding-bottom: 50px;
  li {
    position: relative;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);
    &:after {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 50%;
      background: rgb(0, 0, 0);
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.25) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      content: '';
    }
    &:first-child {
      grid-column: 1 / span 2;
      grid-row: 1 / span 2;
    }
  }
  .thumb-post {
    img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
    }
  }

  .wrap-info {
    position: absolute;
    left: 20px;
    bottom: 30px;
    z-index: 1;
    text-align: left;
    .txt-category {
      font-size: 1rpx;
      color: #eee;
    }
    .tit-post {
      display: block;
      font-size: 18px;
      color: #fff;
    }
  }
}
</style>


