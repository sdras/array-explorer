<template>
  <div id="app">
    <app-code />
  </div>
</template>

<script>
import AppCode from './components/AppCode'

export default {
  components: {
    AppCode
  }
}
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f6f7f7;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
