<template>
   <section class="main-content">
    <div class="container">
      <h1 class="title has-text-centered">
        Recent Pages
      </h1>
      <div class="columns is-multiline">
        <div class="column is-half" v-for="page in getPages" :key="page.id">
          <div class="card">
           <header class="card-header">
            <p class="card-header-title">
              {{ page.title }}
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <icon name="user"></icon> Exported by:  <strong>{{ page.created_by }}</strong>
              <br>
           
                <icon name="clock" scale="1"></icon>  {{ page.created_at }}
              
            </div>
          </div>
          <footer class="card-footer">
            <router-link :to="`page/${page.id}`" 
              class="card-footer-item" append>
             <icon name="eye" class="icon"></icon> View 
            </router-link>
            <a :href="page.url" 
              class="card-footer-item" append>
              <icon name="link" class="icon"></icon> Visit 
            </a>
          </footer>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getPages'
    ]
    )
  }
}
</script>
<style scoped>
.icon{
  margin-right: 10px;
}
.title {
  margin-top: 50px;
}
</style>
