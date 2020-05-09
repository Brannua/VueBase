<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      {{ item.title }}
      <button @click="deleteItem(item.id)">删除</button>
    </li>
  </ul>
</template>

<script>

import event from "./event"

export default {
  // 接收父组件的数据
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    deleteItem(id) {
      // 调用父组件的事件
      this.$emit("delete", id)
    },
    // 自定义事件
    addTitleHandler(title) {
      console.log("on add title", title)
    }
  },
  created() {
    console.log("list created")
  },
  mounted() {
    console.log("list mounted")
    // 绑定自定义事件和Input组件通信
    event.$on("onAddTitle", this.addTitleHandler)
  },
  beforeUpdate() {
    console.log("list before updated")
  },
  updated() {
    console.log("list updated")
  },
  beforeDestroy() {
    console.log('list before destory')
    // 及时解绑自定义事件，否则可能造成内存泄露
    event.$off("onAddTitle", this.addTitleHandler)
  },
  destroyed() {
    console.log('list destoryed');
  },
}
</script>
