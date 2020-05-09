<template>
  <div>
    <input type="text" v-model="title">
    <button @click="addTitle">add</button>
  </div>
</template>

<script>

import event from './event'

export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTitle() {
      // 调用父组件的事件 ( 向list增加数据 )
      this.$emit('add', this.title)
      // 调用和List组件通信的自定义事件
      event.$emit('onAddTitle', this.title)
      // 清空输入框
      this.title = ''
    }
  }
}
</script>
