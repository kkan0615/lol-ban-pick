import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import GeneralLayout from '@/layouts/General/index.vue'
import lolBanPickRoutes from './modules/lol'
import { RouterNameKeyEnum } from '@/types/router/name'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouterNameKeyEnum.GENERAL_LAYOUT,
    component: GeneralLayout,
    children: [
      {
        path: '',
        name: RouterNameKeyEnum.HOME,
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
