<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/img/logo.png"> -->
    <sysIndex/>
  </div>
</template>

<script>
import sysIndex from './components/sysIndex.vue'

export default {
  name: 'App',
  components: {
    sysIndex
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
