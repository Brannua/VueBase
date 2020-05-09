<template>
  <div>
    <p class="yellow">文本插值</p>
    <p>{{ message }}</p>
    <br/>

    <p class="yellow">JS 表达式 只能是表达式，不能是 js 语句</p>
    <p>{{ flag ? 'yes' : 'no' }}</p>
    <br/>

    <p class="yellow">动态属性 id</p>
    <p :id="dynamicId">demo-dynamic-attr</p>
    <br/>

    <p class="yellow">【注意】使用 v-html 之后，有 xss 风险，且会覆盖子元素</p>
    <p v-html="rawHtml">
      <span>此元素被覆盖</span>
      <span>此元素被覆盖</span>
    </p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message: 'hello world',
      flag: true,
      dynamicId: `id-${Date.now()}`,
      rawHtml: '本元素覆盖了原来的子元素'
    }
  }
}
</script>

<style scoped>
.yellow {
  background-color: #ff0;
}
</style>