<template>
  <div>
    <app-hero></app-hero>
  </div>
</template>

<script>
import Hero from './Hero'
export default {
  name: 'Home',
  components: {
    appHero: Hero
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
