<template>
  <div>
    <p>{{ name }}--{{ city }}</p>
    <button @click="showName">showName</button>
  </div>
</template>

<script>

import myMixin from './mixin'

export default {
  mixins: [myMixin],  // 可以添加多个，会自动合并
  data() {
    return {
      name: 'lpj'
    }
  }
}
</script>
