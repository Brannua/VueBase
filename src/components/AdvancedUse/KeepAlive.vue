<template>
  <div>
    <button @click="changeState('A')">A</button>
    <button @click="changeState('B')">B</button>
    <button @click="changeState('C')">C</button>

    <StateA v-if="state === 'A'"/>
    <StateB v-if="state === 'B'"/>
    <keep-alive>
      <StateC v-if="state === 'C'"/>
    </keep-alive>
  </div>
</template>

<script>

import StateA from './KeepAlive/StateA'
import StateB from './KeepAlive/StateB'
import StateC from './KeepAlive/StateC'

export default {
  components: {
    StateA,
    StateB,
    StateC,
  },
  data() {
    return {
      state: 'A'
    }
  },
  methods: {
    changeState(newState) {
      this.state = newState
    }
  }
}
</script>
