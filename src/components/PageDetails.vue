<template>
  <div>
    {{getSinglePage.created_by}}
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getSinglePage'
    ])
  },
  methods: {
    ...mapActions([
      'fetchSinglePage'
    ])
  },
  created() {
    this.fetchSinglePage(this.$route.params.id)
  }
}
</script>