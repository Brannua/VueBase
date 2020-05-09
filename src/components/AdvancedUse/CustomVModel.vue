<template>

  <!-- input使用了:value而不是v-model -->

  <input type="text"
    :value="xxx"
    @input="$emit('zzz', $event.target.value)"
  >

</template>

<script>

// 笔记参考:
// https://blog.csdn.net/Brannua/article/details/105992977

export default {
  // 1
  props: ['xxx'],
  // 2
  model: {
    prop: 'xxx',
    event: 'zzz'
  }
}
</script>
