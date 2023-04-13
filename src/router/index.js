import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/index:userId' },
  { path: '/index:userId', component: () => import('@/views/index.vue') },
  { path: '/help', component: () => import('@/views/help.vue') },
  { path: '/user', component: () => import('@/views/user.vue') }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
