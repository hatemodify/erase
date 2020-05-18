<template>
  <div class="search-comp">
    <div class="search-bar">
      <input type="text" class="tf-search" v-model="keyword" />
      <button class="btn-search">Search</button>
    </div>
    <clock />
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Clock from './Clock.vue'
@Component({
  components: {
    Clock,
  },
})
export default class Search extends Vue {
  public keyword = ''
}
</script>
<style lang="scss" scoped>
.search-comp{
    overflow: hidden;
}
.search-bar {
  position: relative;
  float: left;
  height: 40px;
  line-height: 20px;
  width: calc(50% - 5px);
  .tf-search {
    border: 0 none;
    background: none;
    border-bottom: 1px solid #999;
    width: 100%;
    height: 40px;
    outline: none;
    &:focus {
      border-color: #ff3465;
    }
  }
  .btn-search {
    text-indent: -9999px;
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
    height: 40px;
    background: none;
    border: 0 none;
    cursor: pointer;
    outline: none;
    &:after {
      left: 10px;
      top: 5px;
      position: absolute;
      width: 12px;
      height: 12px;
      border: 2px solid #e3e3e3;
      border-radius: 50%;
      content: '';
    }
    &:before {
      position: absolute;
      width: 2px;
      height: 12px;
      background: #e3e3e3;
      top: 16px;
      left: calc(40% + 10px);
      transform: rotate(-45deg);
      content: '';
    }
  }
}
</style>
