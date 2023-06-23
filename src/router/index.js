import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard,
      children: [
        {
          path: '/teacher',
          name: 'teacher',
          component: () => import('../views/Teachers/Teacher.vue')
        }
      ]
    },
  ]
})

export default router
