// frontend/src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import DashboardPage from '../views/DashboardPage.vue';
import MembersPage from '../views/MembersPage.vue';
import DepositsPage from '../views/DepositsPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage,
      meta: { layout: 'GuestLayout' }
    },
    {
      path: '/members',
      name: 'members',
      component: MembersPage,
      meta: { layout: 'AdminLayout', requiresAuth: true }
    },
    {
      path: '/deposits',
      name: 'deposits',
      component: DepositsPage,
      meta: { layout: 'AdminLayout', requiresAuth: true }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage,
      meta: { layout: 'AdminLayout', requiresAuth: true }
    },
    { path: '/login', name: 'login', component: { template: '<div>Login Page</div>' }, meta: { layout: 'GuestLayout' } },
    { path: '/register', name: 'register', component: { template: '<div>Register Page</div>' }, meta: { layout: 'GuestLayout' } },
  ]
});

export default router;