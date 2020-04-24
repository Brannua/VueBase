<template>
  <div>

    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.title }}
        <button @click="deleteItem(item.id)">删除</button>
      </li>
    </ul>

  </div>
</template>

<script>

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
      this.$emit('delete', id)
    }
  }
}
</script>
