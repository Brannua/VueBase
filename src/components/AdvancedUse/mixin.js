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