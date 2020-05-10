<template>
  <div>
    <slot :xxx="name"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'lpj'
    }
  }
}
</script>
