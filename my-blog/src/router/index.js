import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      components: {
        main: Home
      }
    }
  ]
})
