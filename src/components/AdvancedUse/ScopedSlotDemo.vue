<template>
  <div>
    <slot :xxx="website"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      website: {
        title: 'brannua',
        subTitle: 'my github',
        url: 'https://www.github.com/brannua'
      }
    }
  }
}
</script>
