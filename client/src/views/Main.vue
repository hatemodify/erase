<template>
  <div></div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import axios from 'axios'
@Component
export default class Main extends Vue {
  created() {
    axios.get('http://localhost:9998/api').then(res => {
      console.log(res)
    })
  }
}
</script>
