<template>
  <HomePage msg="Welcome to Your Vue.js App" />
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Montserrat:wght@300&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 2em;
  font-family: 'Comfortaa', cursive;
  font-family: 'Montserrat', sans-serif;
}

body {
  width: 100vw;
  background-color: black;
}
</style>
