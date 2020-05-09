/**
 * @desc 提取出来的公共逻辑
 */
export default {
  data() {
    return {
      city: 'py'
    }
  },
  methods: {
    showName() {
      console.log(this.name)
    }
  },
  mounted() {
    console.log('mixin mounted', this.name)
  }
}