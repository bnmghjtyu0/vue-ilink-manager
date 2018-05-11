import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import projectContent from '@/components/projectContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projectContent',
      name: 'projectContent',
      component: projectContent
    }
  ]
})
