import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import Cookies from 'js-cookie'

import Hello from '@/components/Hello'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   let user = Cookies.get('email');
//
//   if (!user) next('login')
//   else if (user) next('hello')
//   else next()
// })

export default router
