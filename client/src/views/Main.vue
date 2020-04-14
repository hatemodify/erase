<template>
  <div class="content-inner">{{nameUpperCase}}
    <button @click="updateName('sadlkjlaksjdlkajsdlkj')">asdasd</button>
  </div>
  
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import axios from 'axios'
const user = namespace('User')

@Component
export default class Main extends Vue {
  @user.State
  public name!: string

  @user.Getter
  public nameUpperCase!: string

  @user.Action
  public updateName!: (newName: string) => void

}
</script>

<style lang="scss" scoped>
.content-inner{
  color: #fff;
}
</style>