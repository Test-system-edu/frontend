import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, Dashboard, Students, Teachers, Login, Error, Tests } from '../views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: Dashboard,
        },
        {
          path: '/teachers',
          name: 'teachers',
          component: Teachers,
        },
        {
          path: '/students',
          name: 'students',
          component: Students,
        },
        {
          path: '/tests',
          name: 'tests',
          component: Tests,
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: Error,
    }
  ]
})

export default router
