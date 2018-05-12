import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import PageDetails from '@/components/PageDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
    path: '/page/:id',
    name: 'page-detail',
    component: PageDetails
    }
  ]
})
