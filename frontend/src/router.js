import Vue from 'vue'
import VueRouter from 'vue-router'

import CarouselComponent from '@/components/CarouselComponent.vue'
import ExampleComponent from '@/components/ExampleComponent.vue'
import MenuComponent from '@/components/MenuComponent.vue'

import AboutPage from '@/pages/AboutPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import SignUpPage from '@/pages/SignUpPage.vue'


const routes = [
  {path: '/foo', component: MenuComponent, name: 'menu'},
  {path: '/bar', component: ExampleComponent, name: 'example'},
  {path: '/about', component: AboutPage, name: 'about'},
  
  {path: '/login', component: LoginPage, name: 'login'},
  {path: '/sign-up', component: SignUpPage, name: 'sign-up'},
  {path: '/', component: CarouselComponent, name: 'home'},
  //{path: '*', component: 404PageNotFound}, //404
]

Vue.use(VueRouter)
const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) { return {x: 0, y: 0} },
  mode: 'history',
  routes
})

export default router
