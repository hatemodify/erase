<template>
  <ul class="recent-list">
    <li v-for="(item, idx) in post" :key="idx" :class="item.category">
      <router-link to="">
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
@Component
export default class RecentList extends Vue {
  @Prop() post!: Array<any>
  public categoryImg: object = {
    node:
      'https://kdydesign.github.io/2017/07/15/nodejs-npm-tutorial/cover.png',
    vue: 'https://miro.medium.com/max/3920/1*oZqGznbYXJfBlvGp5gQlYQ.jpeg',
    react: 'https://miro.medium.com/max/1200/0*XCgoYU9sqt95P8J0.png',
    angular: '',
    svelte: '',
    js: '',
    typescript: '',
  }
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
    &:after {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 50%;
      background: rgb(0, 0, 0);
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      content: '';
    }
    &:first-child {
      grid-column: 1 / span 2;
      grid-row: 1 / span 2;
    }
  }
  .thumb-post img {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
  }
  .tit-post {
    position: absolute;
    left: 20px;
    bottom: 20px;
    z-index: 1;
    font-size: 16px;
    color: #fff;
  }
}
</style>
