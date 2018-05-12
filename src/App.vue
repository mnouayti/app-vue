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
      'fetchSinglePage'
    ])
  },
  created() {
    this.fetchPages()
    this.fetchSinglePage('550e44eded7b940f24c6e60354355687')
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
