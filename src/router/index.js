import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: () => import("@/views/index.vue") },
  { path: '/vip', component: () => import("@/views/vip.vue") }

]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router