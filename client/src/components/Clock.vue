<template>
  <div class="timer-comp">
    <span class="current-time">{{currentTime}}</span>
    <span class="current-date">{{currentDate}}</span>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class Clock extends Vue {
  public hh = 0
  public mm = ''
  public ampm = ''
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
      this.ampm = date.getHours() < 12 ? 'AM' : 'PM'
    }, 1000)

    return `${this.hh}:${this.mm} ${this.ampm}`
  }
  get currentDate(): string {
    const date = new Date()
    return `${this.week[date.getDay()]},${
      this.month[date.getMonth()]
    } ${date.getDate()}`
  }
}
</script>
<style lang="scss" scoped>
.timer-comp {
  float: right;
  text-align: right;
  font-size: 42px;
  .current-time {
    font-size: 42px;
    line-height: 50px;
  }
  .current-date {
    font-size: 14px;
    line-height: 20px;
  }
  [class^='current'] {
    display: block;
  }
}
</style>
