import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: () => import("@/views/index.vue") },
  { path: '/vip', component: () => import("@/views/vip.vue") },
  { path: '/user', component: () => import("@/views/user.vue") }

]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router