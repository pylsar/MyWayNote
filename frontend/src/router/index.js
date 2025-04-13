import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/top',
      name: 'top',
      component: () => import('../views/TopView.vue'),
    },
    {
      path: '/persons',
      name: 'persons',
      component: () => import('../views/PersonsView.vue'),
    },
    {
      path: '/moments',
      name: 'moments',
      component: () => import('../views/MomentsView.vue'),
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../views/MyTaskList.vue'),
    },
  ],
})

export default router
