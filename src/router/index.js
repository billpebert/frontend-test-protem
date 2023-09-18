import { createRouter, createWebHistory } from "vue-router";
import Landing from '../views/Landing.vue'
import AdminPanel from '../views/AdminPanel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminPanel,
    },
  ]
})

export default router