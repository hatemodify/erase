<template>
  <div class="timer-comp">{{currentTime}}{{currentDate}}</div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class Clock extends Vue {
  public hh: number = null
  public mm: string = null
  public ss: string = null
  public ampm: string = null
  public week: Array<string> = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  public month: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  get currentTime(): string {
    setInterval(() => {
      const date = new Date()
      this.hh = date.getHours() % 12
      this.hh = this.hh ? this.hh : 12
      this.mm =
        date.getMinutes() < 10
          ? `0${date.getMinutes()}`
          : date.getMinutes().toString()
      this.ss =
        date.getSeconds() < 10
          ? `0${date.getSeconds()}`
          : date.getSeconds().toString()
      this.ampm = this.hh < 12 ? 'AM' : 'PM'
    }, 1000)

    return `${this.hh}:${this.mm}:${this.ss} ${this.ampm}`
  }
  get currentDate(): string {
    const date = new Date()
    return `${this.week[date.getDay()]},${this.month[date.getMonth()]} ${date.getDate()}`
  }

}
</script>
<style lang="scss" scoped>
.timer-comp {
  font-size: 42px;
}
</style>
