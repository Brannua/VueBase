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
      this._logEventMsg(event)
    },
    increment2(val, event) {
      this.num = this.num + val
      this._logEventMsg(event)
    },
    _logEventMsg(even) {
      console.log(even)
      console.log(even.target)
      console.log(even.currentTarget)
      console.log(even.__proto__.constructor)
    }
  }
}

/* 结论 */
// 1. event是原生的
// 2. 事件被挂载到当前元素
</script>
