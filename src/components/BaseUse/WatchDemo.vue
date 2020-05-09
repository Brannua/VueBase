<template>
  <div>
    <input v-model="name" />
    <input v-model="info.city" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "lpj",
      info: {
        city: "py"
      }
    }
  },
  watch: {
    name(newValue, oldValue) {
      // 值类型，可正常拿到
      console.log("watch name")
      console.log("old value:", oldValue)
      console.log("new value:", newValue)
    },
    info: {
      // 深度监听可以监听变化
      // 但因为引用类型指针相同！
      // 所以只能获取newValue，无法获取oldValue
      deep: true,
      handler(newValue, oldValue) {
        console.log("watch name")
        console.log("old value:", oldValue)
        console.log("new value:", newValue)
      }
    }
  }
}
</script>
