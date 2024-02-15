import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../views/Main.vue'
import tensorFlow from '../views/tensorFlow.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main
    },
    {
      path: '/tensor-flow',
      name: 'tensorFlow',
      component: tensorFlow
    }
  ]
})

export default router
