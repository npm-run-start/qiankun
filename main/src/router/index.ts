import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/Layout.vue'

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          /**
           * @description 自动导入 icon,
           * @description vite.config.ts 有ep 前缀
           * @description 页面中直接使用需要<IconEpOperation />或<i-ep-peration />
           * */
          icon: IconEpMenu,
        },
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: '/about',
        name: 'about',
        meta: {
          title: '关于',
          icon: IconEpMenu,
        },
        component: () => import('@/views/AboutView.vue'),
      },
      {
        path: '/app/app-1',
        name: 'app-1',
        meta: {
          title: '微应用-1',
          icon: IconEpMenu,
        },
        children: [
          {
            // 如果需要，history模式需要通配所有路由，详见vue-router文档
            // path: '/app/app-1/:pathMatch(.*)*',
            path: '/app/app-1/home',
            name: 'app-1-home',
            meta: {
              title: '路由一',
              icon: IconEpOperation,
            },
            component: () => import('@/components/SubContainer.vue'),
          },
          {
            // 如果需要，history模式需要通配所有路由，详见vue-router文档
            // path: '/app/app-1/:pathMatch(.*)*',
            path: '/app/app-1/about',
            name: 'app-1-about',
            meta: {
              title: '路由二',
              icon: IconEpOperation,
            },
            component: () => import('@/components/SubContainer.vue'),
          },
        ],
      },
      {
        path: '/app/app-2',
        name: 'app-2',
        meta: {
          title: '微应用-2',
          icon: IconEpMenu,
        },
        children: [
          {
            path: '/app/app-2/home',
            name: 'app-2-home',
            meta: {
              title: '路由一',
              icon: IconEpOperation,
            },
            component: () => import('@/components/SubContainer.vue'),
          },
          {
            path: '/app/app-2/about',
            name: 'app-2-about',
            meta: {
              title: '路由二',
              icon: IconEpOperation,
            },
            component: () => import('@/components/SubContainer.vue'),
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export { routes }

export default router
