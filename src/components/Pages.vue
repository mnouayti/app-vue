<template>
   <section class="main-content">
    <div class="container">
      <h1 class="title has-text-centered">
        Recent Pages.
      </h1>
      <div class="columns is-multiline">
        <div class="column is-half" v-for="page in pages" :key="page.id">
          <div class="card">
           <header class="card-header">
            <p class="card-header-title">
              {{ page.title }}
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              {{ page.created_by }}
              <br>
              <small>
                by <strong>{{ page.created_by}}</strong> 
                \\ {{ page.created_at }}
              </small>
            </div>
          </div>
          <footer class="card-footer">
            <router-link :to="`page/${page.id}`" 
              class="card-footer-item" append>
              View 
            </router-link>
            <a :href="page.url" 
              class="card-footer-item" append>
              Visit 
            </a>
          </footer>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            pages: [
                {
                "created_at":	"2018-05-11T18:58:11.575024+00:00",
                "created_by":	"ali",
                "html":	"hhh",
                "id":	"7c027b164e56e0cc3c5c672fb048903a",
                "title":	"bla bla bla bal",
                "url":	"http://azbzdz.fre",
                },
                {
                "created_at": "2018-05-11T18:58:13.865587+00:00",
                "created_by": "med",
                "html": "hhh",
                "id": "c126a51307aa6bade23f1f4628b79fd2",
                "title": "bonjour tous le mode",
                "url": "http://sazbzdz.fre"
                },
                {
                "created_at": "2018-05-11T18:58:16.998635+00:00",
                "created_by": "med",
                "html": "hhh",
                "id": "d2f8d0469e1f091960a70df1b06ab813",
                "title": "enfin hello world",
                "url": "http://sazbzsdz.fre"
                }
            ]
        }
     }
}
</script>

