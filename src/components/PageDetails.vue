<template>
  <section class="main-content">
    <div class="container">
      <div class="box">
        <ul>
          <li>
            <em>Title</em>:   <span class="title is-5">{{getSinglePage.title}}</span> 
          </li>
          <li>
            <em>Exported by</em >: <span class="title is-5">{{getSinglePage.created_by}}</span>
          </li>
           <li>
            <em>Date</em>: <span class="title is-5">{{getSinglePage.created_at | formatDateFromNow}}</span>
          </li>
          <li>
            <em>link</em>: <span class="title is-5">{{getSinglePage.url}}</span>
          </li>
         <em>Source Code</em>: <pre class="sourceCode"> {{getSinglePage.html}} </pre>
        </ul>
      </div>
    </div>
  </section>
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
<style scoped>
.main-content{
  margin-top: 40px;
}
.sourceCode{
  overflow-x: auto;
  padding: 1.25em 1.5em;
  white-space: pre;
  word-wrap: normal;
}
</style>
