import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('../components/layout/Layout.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;