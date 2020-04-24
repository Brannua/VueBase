<template>
  <div>
    <input v-model="name">
    <input v-model="info.city">
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'lpj',
      info: {
        city: 'py'
      }
    }
  },
  watch: {
    name(oldValue, value) {
      // eslint-disable-next-line
      console.log('watch name', oldValue, value)  // 值类型，可正常拿到
    },
    info: {
      handler(oldValue, value) {
        // eslint-disable-next-line
        console.log('watch info', oldValue, value)  // 引用类型，拿不到oldValue，因为指针相同
      },
      deep: true  // 深度监听
    }
  }
}
</script>

<style>

</style>