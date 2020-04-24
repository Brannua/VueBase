<template>
  <div>
    <p>{{ num }}</p>
    <button @click="increment1">+1</button>
    <button @click="increment2(2, $event)">+2</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0
    }
  },
  methods: {
    increment1(event) {
      this.num ++
      // eslint-disable-next-line
      console.log('event', event, event.__proto__.constructor)
      // eslint-disable-next-line
      console.log(event.target)
      // eslint-disable-next-line
      console.log(event.currentTarget)

      /* 结论 */
      // 1. event是原生的
      // 2. 事件被挂载到当前元素
    },
    increment2(val, event) {
      // eslint-disable-next-line
      this.num = this.num + val
      console.log(event.target)
    }
  }
}
</script>

<style>

</style>