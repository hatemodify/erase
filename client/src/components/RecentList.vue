<template>
  <ul class="recent-list">
    <li v-for="(item, idx) in post" :key="idx">{{item.title}}</li>
  </ul>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class RecentList extends Vue {
  @Prop() post!: Array<any>
}
</script>
<style lang="scss" scoped>
.recent-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: row dense;
  grid-gap: 1.9vw;
  padding-bottom: 50px;
  li {
    // float: left;
    &:first-child {
      grid-column: 1 / span 2;
      /* 1번 라인에서 3칸 */
      grid-row: 1 / span 2;
    }
  }
}
</style>
