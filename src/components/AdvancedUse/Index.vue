<template>
  <div>
    <p>Vue 高级特性总结</p>
    <hr>

    <!-- 自定义 v-model 实现双向数据绑定 -->
    <!-- <p>{{ name }}</p> -->
    <!-- <CustomVModel v-model="name"/> -->


    <!-- $nextTick -->
    <!-- <NextTick/> -->


    <!-- <SlotDemo :url="website.url"> -->
      <!-- {{ website.title }} -->
    <!-- </SlotDemo> -->


    <!-- <ScopedSlotDemo> -->
      <!-- <template v-slot="zzz"> -->
        <!-- <a :href="zzz.xxx.url"> -->
          <!-- {{ zzz.xxx.title }} -->
        <!-- </a> -->
      <!-- </template> -->
    <!-- </ScopedSlotDemo> -->


    <!-- <NamedSlotDemo> -->
      <!-- <template v-slot:header> -->
        <!-- <h1>将插入到 header slot 中</h1> -->
      <!-- </template> -->
      <!-- <template v-slot:footer> -->
        <!-- <h1>将插入到 footer slot 中</h1> -->
      <!-- </template> -->
    <!-- </NamedSlotDemo> -->

    <!-- 动态组件 -->
    <!-- <component :is="nextTickName"/> -->


    <!-- 按需加载并渲染异步组件 -->
    <!-- <FormDemo v-if="isShow"/> -->
    <!-- <button @click="isShow = true">show</button> -->


    <!-- keep-alive -->
    <!-- <KeepAlive/> -->


    <MixinDemo/>

  </div>
</template>

<script>

// import CustomVModel from './CustomVModel'
// import NextTick from './NextTick'
// import SlotDemo from './SlotDemo'
// import ScopedSlotDemo from './ScopedSlotDemo'
// import NamedSlotDemo from './NamedSlotDemo'

// // 动态组件
// import NextTick from './NextTick'

// // 具有缓存功能的组件
// import KeepAlive from './KeepAlive'


import MixinDemo from './MixinDemo'

export default {
  components: {
    // CustomVModel,
    // NextTick,
    // SlotDemo,
    // ScopedSlotDemo,
    // NamedSlotDemo,

    // // 动态组件
    // NextTick,

    // // 异步组件
    // FormDemo: () => import('../BaseUse/FormDemo')

    // // 具有缓存功能的组件
    // KeepAlive,

    MixinDemo,
  },
  data() {
    return {
      name: 'lpj',
      website: {
        title: 'baidu',
        subTitle: '百度百科',
        url: 'https://www.baidu.com/'
      },

      // // 动态组件
      // nextTickName: 'NextTick',

      // // 控制异步组件的加载
      // isShow: false,
    }
  }
}
</script>

<style>

</style>