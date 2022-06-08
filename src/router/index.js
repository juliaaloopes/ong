import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/animais',
      name: 'animais',
      component: () => import('../views/Animais.vue')
    },
    {
      path: '/adotantes',
      name: 'adotantes',
      component: () => import('../views/Adotantes.vue')
    },
    {
      path: '/fornecedores',
      name: 'fornecedores',
      component: () => import('../views/Fornecedores.vue')
    },
    {
      path: '/doacoes',
      name: 'doacoes',
      component: () => import('../views/Doacoes.vue')
    },
    {
      path: '/compras',
      name: 'compras',
      component: () => import('../views/Compras.vue')
    },
    {
      path: '/atendentes',
      name: 'atendentes',
      component: () => import('../views/Atendentes.vue')
    },
    {
      path: '/veterinarios',
      name: 'veterinarios',
      component: () => import('../views/Veterinarios.vue')
    },
    {
      path: '/protetores',
      name: 'protetores',
      component: () => import('../views/Protetores.vue')
    }
  ]
})

export default router
