import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      components: {
        main: Login
      }
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
