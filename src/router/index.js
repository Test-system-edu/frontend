import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, Dashboard, Students, Teachers, Login, Error, SlugStudent, SlugTeachers } from '../views'

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
          path: '/students/:id/:name',
          name: 'slug_students',
          component: SlugStudent,
        },
        {
          path: '/teachers/:id/:name',
          name: 'slug_teachers',
          component: SlugTeachers,
        },
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
    },
  ]
})

export default router
