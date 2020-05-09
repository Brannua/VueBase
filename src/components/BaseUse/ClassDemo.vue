<template>
  <div>
    <p :class="{ black: isBlack, yellow: isYellow }">使用 class ( 对象 )</p>
    <p :class="[black, yellow]">使用 class ( 数组 )</p>
    <p :style="styleData">使用 styleData</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBlack: true,
      isYellow: true,

      black: "black",
      yellow: "yellow",

      styleData: {
        fontSize: '40px', // 驼峰式写法
        color: 'red',
        backgroundColor: '#ccc', // 驼峰式写法
      }
    }
  }
}
</script>

<style scoped>
  .black {
    background: #000;
  }
  .yellow {
    color: #ff0;
  }
</style>
