<template>
  <div>
    <app-hero></app-hero>
    <app-pages></app-pages>
  </div>
</template>

<script>
import Hero from './Hero'
import Pages from './Pages'
export default {
  name: 'Home',
  components: {
    appHero: Hero,
    appPages: Pages
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
