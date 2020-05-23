# Vue.js全家桶知识回顾，复盘提升

### 基本使用

- 插值、表达式

- 指令、动态属性

- v-html ( 有xss风险，会覆盖子组件 )

- computed 和 watch

  - computed 有缓存，data不变则不会重新计算

  - watch 深度监听 ( 如果watch监听引用类型，则拿不到oldValue )

- class 和 style

  - 使用动态属性

  - style使用驼峰式写法

- 条件渲染

  - v-if v-else 的用法 ( 可使用变量，也可以使用表达式 )

  - v-if 和 v-show 的区别

  - v-if 和 v-show 的使用场景

- 循环( 列表 )渲染

  - 遍历对象也可以使用 v-for

  - key 的重要性，key不能乱写！( 如 random 或 index )

  - v-for 和 v-if 最好不要写在同一个标签上，因为v-for优先级高，如果写在同一个标签上，则每迭代一次v-for，就会接着判断一次 v-if，该循环迭代几次，v-if 就会判断几次，十分浪费性能

  - 推荐v-if作为v-for的父元素或子元素

- 事件

  - event参数，自定义参数
  
  - 【观察】事件被绑定到哪里

  - 事件修饰符，按键修饰符

    ```html
      // 阻止单击事件继续传播
      <a> v-on:click.stop="doThis"</a>
      // 提交事件不再重载页面
      <form v-on:submit.prevent="onSubmit"></form>
      // 修饰符可以串联
      <a v-on:click.stop.prevent="doThat"></a>
      // 只有修饰符
      <form v-on:submit.prevent></form>
      // 添加事件监听器时使用事件捕获模式
      <div v-on:click.capture="doThis">...</div>
      // 只当在enent.target是当前元素时触发处理函数
      <div v-on:click.self="doThat">...</div>

      // 按下的键子中有ctrl
      <button @click.ctrl="onCLick">A</button>
      // 按下的键子只有ctrl
      <button @click.ctrl.exact="onCtrlCLick">A</button>
      // 没按下任何键子
      <button @click.exact="onCLick">A</button>
    ```

- 表单

  - v-model
  
  - 常见表单项: textarea、checkbox、redio、select

  - 修饰符: lazy、number、trim

### 组件使用

- 父子组件通讯: 属性的传递-props & 事件的触发-this.$emit

- 兄弟组件通讯: 自定义事件

  ```js
    var event = new Vue()
    event.$on()
    event.$emit()
    event.$off()
  ```

- 组件生命周期

  - 单个组件

    - created 和 mounted 的区别: created标志着vue实例创建完毕，mounted标志着页面渲染完毕

  - 父子组件生命周期

### 高级特性

- slot

  - 基本使用

  - 作用域插槽

  - 具名插槽

- $nextTick & refs

  - Vue是异步渲染

  - data改变之后，DOM不会立刻渲染

  - $nextTick会在DOM被渲染之后触发，以获取最新DOM节点

- 自定义v-model: 例如 vue 颜色选择

- 动态组件

  - :is="component-name" 用法

  - 需要根据数据动态渲染的场景，即组件类型不确定

- 异步加载组件

  - import() 函数

  - 按需加载、异步加载大组件

- keep-alive

  - 缓存组件

  - 频繁切换，不需要重复渲染

  - Vue常见性能优化

- mixins

  - 多个组件有相同的逻辑，抽离出来

  - mixins并不是完美的解决方案，会有一些问题

    - 变量来源不明确，不利于阅读

    - 多个mixins可能会造成命名冲突

    - mixins和组件可能出现多对多的关系，复杂度较高

  - Vue3 提出的 Composition API 旨在解决这些问题

### Vuex

- Vuex基本概念

  - state

  - getters

  - mutation

  - action

- 用于Vue组件

  - dispatch

  - commit

  - mapState

  - mapGetters

  - mapActions

  - mapMutations

### Vue Router

- 路由模式( hash、H5-history )

  ```js
    const router = new VueRouter({
      mode: 'history',
      routes: [...]
    })
  ```

- 路由配置( 动态路由、懒加载 )

  ```js
    const User = {
      template: '<div>{{ $route.params.id }}</div>'
    }
    const router = new VueRouter({
      routes: [
        {
          path: '/user/:id',
          component: User
        }
      ]
    })
  ```

  ```js
    export default new VueRouter({
      routes: [
        {
          path: '/',
          component: () => import('../components/Nav')
        },
        {
          path: '/test',
          component: () => import('../components/Test')
        }
      ]
    }) 
  ```

### 面试题

- v-show 和 v-if 的区别

- 描述 Vue 组件的生命周期 (包括有父子组件的情况)

- Vue 组件如何通讯

  - 父子组件 props $emit

  - 兄弟组件 ```event.$on event.$off event.$emit```

  - vuex

- 为何 v-for 中 使用 key？

  - v-for 必须使用 :key，且不能是index和random

  - 因为diff算法中通过tag和key来判断是否是sameNode

  - 减少渲染次数，提升渲染性能

- 何时使用beforeDestory

  - 解绑自定义事件 event.$off
  - 清除定时器
  - 解绑自定义的DOM事件，如window.scroll

- Vuex中action和mutation的区别

  - action处理异步，mutation不可以

  - mutation做原子操作

  - action可以整合多个mutation

- vue常见性能优化

  - 合理使用v-show & v-if

  - 合理使用computed

  - v-for使用:key，以及避免和v-if同时使用，因为v-for优先级高

  - 自定义事件、DOM事件及时销毁，否则内存泄漏

  - 合理使用异步组件

  - 合理使用keep-alive

  - data层级不要太深

  - 使用vue-loader在开发环境做模板预编译

  - webpack层面的优化

  - 前端通用的性能优化，如图片懒加载

  - 使用SSR

- 描述 Vue 组件渲染和更新的过程？

- 双向数据绑定 v-model 的实现原理？
