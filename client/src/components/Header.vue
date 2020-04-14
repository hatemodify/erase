<template>
  <header class="site-header">
    <h1 class="site-logo"></h1>
  </header>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import axios from 'axios'
@Component
export default class Header extends Vue {}
</script>
<style lang="scss" scoped>
.site-header {
  height: 60px;
  background: rgb(38, 38, 37);
  overflow: hidden;
}
</style>
