<template>
  <div id="app">
    <app-top-bar></app-top-bar>
    <router-view/>
  </div>
</template>

<script>
import TopBar from './components/TopBar'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    appTopBar: TopBar
  },
  methods: {
    ...mapActions([
      'fetchPages',
    ])
  },
  created() {
    this.fetchPages()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
