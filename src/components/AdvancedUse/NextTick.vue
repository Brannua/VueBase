<template>
  <div id="app">
    <ul ref="xxx">
      <li v-for="(item, index) in list" :key="index">
        {{ item }}
      </li>
    </ul>
    <button @click="addItem">添加一项</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      list: ['a', 'b', 'c']
    }
  },
  methods: {
    addItem() {
      this.list.push(`${Date.now()}`)
      this.list.push(`${Date.now()}`)
      this.list.push(`${Date.now()}`)

      // // 获取DOM元素( 不是最新的，由于Vue是异步渲染 )
      // const ulElem = this.$refs.xxx
      // console.log(ulElem.childNodes.length)

      this.$nextTick(() => {
        const ulElem = this.$refs.xxx
        console.log(ulElem.childNodes.length)
      })

      // 注意页面渲染时会将data的修改做整合，多次data修改只会渲染一次！！！

    }
  }
}
</script>

<style>

</style>