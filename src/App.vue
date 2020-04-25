<template>
  <div id="app">
    <!-- <ClassDemo/> -->
    <!-- <ComputedDemo/> -->
    <!-- <ConditionDemo/> -->
    <!-- <EventDemo/> -->
    <!-- <FormDemo/> -->
    <!-- <ListDemo/> -->
    <!-- <TplDemo/> -->
    <!-- <WatchDemo/> -->

    <!-- <ComponentDemo/> -->

    <AdvancedUse/>

  </div>
</template>

<script>
// import ClassDemo from './components/BaseUse/ClassDemo'
// import ComputedDemo from './components/BaseUse/ComputedDemo'
// import ConditionDemo from './components/BaseUse/ConditionDemo'
// import EventDemo from './components/BaseUse/EventDemo'
// import FormDemo from './components/BaseUse/FormDemo'
// import ListDemo from './components/BaseUse/ListDemo'
// import TplDemo from './components/BaseUse/TplDemo'
// import WatchDemo from './components/BaseUse/WatchDemo'

// import ComponentDemo from './components/ComponentsDemo/Index'

import AdvancedUse from './components/AdvancedUse/Index'

export default {
  name: 'App',
  components: {
    // ClassDemo,
    // ComputedDemo,
    // ConditionDemo,
    // EventDemo,
    // FormDemo,
    // ListDemo,
    // TplDemo,
    // WatchDemo,

    // ComponentDemo,

    AdvancedUse,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
