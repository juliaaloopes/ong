import { createRouter, createWebHistory } from 'vue-router'
import ongRoute from '../ong/routes';


const routes = createRouter({
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



const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
