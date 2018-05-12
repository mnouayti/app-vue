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
  font-family: "San Francisco Display", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
