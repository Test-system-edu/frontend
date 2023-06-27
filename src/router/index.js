import { createRouter, createWebHistory } from 'vue-router'
import {
  HomeView,
  Dashboard,
  Students,
  Teachers,
  Roles,
  Login,
  Error,
  Tests,
  Groups,
  Results,
  SlugStudent,
  SlugTeachers,
  SlugTests,
  SlugResults,
  SlugGroups,
  SlugRoles,
  SlugSubjects,
  Subjects,
} from '../views'

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
          path: '/employees',
          name: 'employees',
          component: Teachers,
        },
        {
          path: '/employees/:id/:name',
          name: 'slug_teachers',
          component: SlugTeachers,
        },
        {
          path: '/roles',
          name: 'roles',
          component: Roles,
        },
        {
          path: '/roles/:id/:name',
          name: 'slug_roles',
          component: SlugRoles,
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
          path: '/tests',
          name: 'tests',
          component: Tests,
        },
        {
          path: '/subjects/:id/:name',
          name: 'slug_subjects',
          component: SlugSubjects,
        },
        {
          path: '/subjects',
          name: 'subjects',
          component: Subjects,
        },
        {
          path: '/students/:id/:name',
          name: 'slug_students',
          component: SlugStudent,
        },
        {
          path: '/results',
          name: 'results',
          component: Results,
        },
        {
          path: '/results/:id/:name',
          name: 'slug_results',
          component: SlugResults,
        },
        {
          path: '/groups',
          name: 'groups',
          component: Groups,
        },
        {
          path: '/groups/:id/:name',
          name: 'slug_groups',
          component: SlugGroups,
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