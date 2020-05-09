<template>
  <div>
    <p>输入框: {{ name }}</p>
    <input type="text" v-model="name">
    <input type="text" v-model.trim="name">
    <input type="text" v-model.lazy="name">
    <input type="text" v-model.number="age">

    <p>多行文本: {{ desc }}</p>
    <textarea v-model="desc"></textarea>
    <!-- 注意: <textarea>{{ desc }}</textarea>是不被允许的！！！ -->

    <p>复选框: {{ checked }}</p>
    <input type="checkbox" v-model="checked">

    <p>多个复选框: {{ checkedNames }}</p>
    <label for="jack">Jack</label>
    <input id="jack" type="checkbox" value="Jack" v-model="checkedNames">
    <label for="join">Join</label>
    <input id="join" type="checkbox" value="Join" v-model="checkedNames">
    <label for="mike">Mike</label>
    <input id="mike" type="checkbox" value="Mike" v-model="checkedNames">

    <p>单选 {{ gender }}</p>
    <label for="male">男</label>
    <input id="male" type="radio" value="male" v-model="gender">
    <label for="female">女</label>
    <input id="female" type="radio" value="female" v-model="gender">

    <p>下拉列表选择 {{ selected }}</p>
    <select v-model="selected">
      <option disabled value="">请选择</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>

    <p>下拉列表选择( 多选 ) {{ selectedList }}</p>
    <select v-model="selectedList" multiple>
      <option disabled value="">请选择</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'lpj',
      age: 18,
      desc: '自我介绍',

      checked: true,
      checkedNames: [],

      gender: 'male',

      selected: '',
      selectedList: []
    }
  }
}
</script>
