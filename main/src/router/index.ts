import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      // history模式需要通配所有路由，详见vue-router文档
      path: '/app/app-1/:pathMatch(.*)*',
      name: 'app-1',
      component: () => import('@/components/SubContainer.vue'),
    },
    {
      path: '/app/app-2/:pathMatch(.*)*',
      name: 'app-2',
      component: () => import('@/components/SubContainer.vue'),
    },
  ],
})

export default router
