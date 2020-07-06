<template>
  <div class="alert">
    <img :src="icon[getIconType]" />
    <p class="txt-info">{{getMsgTxt}}</p>
    <button class="btn-confirm" @click="setDimmedStatus()">확인</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { ICON } from '../constants'
import { Getter, State, Mutation } from 'vuex-class'
import { mapGetters, mapMutations } from 'vuex'
@Component({
  // computed: {
  //   ...mapGetters(['getIconType', 'getMsgTxt']),
  //   ...mapMutations(['setDimmedStatus']),
  // },
})
export default class Alert extends Vue {
  @Getter('getIconType')
  public getIconType!: string
  @Getter('getMsgTxt')
  public getMsgTxt!: string

  @Mutation('setDimmedStatus')
  public setDimmedStatus!:boolean

  icon: object = ICON


}
</script>

<style lang="scss" scoped>
.alert {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  width: 90%;
  max-width: 300px;
  background: #fff;
  padding-top: 20px;
  overflow: hidden;
  word-break: break-all;
  .txt-info {
    padding: 20px;
  }
  .btn-confirm {
    display: block;
    height: 40px;
    width: 100%;
    border-top: 1px solid #e3e3e3;
  }
}
</style>