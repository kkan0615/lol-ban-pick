import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import GeneralLayout from '@/layouts/General/index.vue'
import lolBanPickRoutes from './modules/lol'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'GeneralLayout',
    component: GeneralLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home/index.vue'),
        meta: {
          hidden: true,
          requiredLogin: true,
        },
      },
      lolBanPickRoutes,
    ]
  },
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
