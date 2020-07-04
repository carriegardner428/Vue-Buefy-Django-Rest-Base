import Vue from 'vue'
import VueRouter from 'vue-router'

import CarouselComponent from '@/components/CarouselComponent.vue'
import ExampleComponent from '@/components/ExampleComponent.vue'
import TestMenu from '@/components/TestComponent.vue'

const routes = [
  //{path: '*', component: ExampleComponent},
  {path: '*', component: CarouselComponent},
  {path: '/foo', component: TestMenu},
  {path: '/bar', component: ExampleComponent}
]

Vue.use(VueRouter)
const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) { return {x: 0, y: 0} },
  mode: 'history',
  routes
})

export default router
