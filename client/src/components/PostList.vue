<template>
  <ul class="post-list">
    <li v-for="(item, idx) in post" :key="idx">{{item.title}}</li>
  </ul>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class PostList extends Vue {
  @Prop() post!: Array<any>
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
