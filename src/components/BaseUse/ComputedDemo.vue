<template>
  <div>
    <p>num : {{ num }}</p>
    <p>double1 : {{ double1 }}</p>
    <input v-model="double2">
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 20
    }
  },
  methods: {
    double() {
      return this.num * 2
    }
  },
  computed: {
    double1() {
      return this.double()
    },
    double2: {
      get() {
        return this.double()
      },
      set(val) {
        this.num = val / 2
      }
    }
  }
}
</script>
