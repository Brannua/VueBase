<template>

  <input type="text"
    :value="xxx"
    @input="$emit('zzz', $event.target.value)"
  >

  <!-- input使用了:value而不是v-model -->

</template>

<script>
export default {
  // 1
  props: ['xxx'],
  // 2
  model: {
    prop: 'xxx',
    event: 'zzz'
  }

  // props: {
  //   xxx: String,
  //   default() {
  //     return ''
  //   }
  // }
}
</script>
