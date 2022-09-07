import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeLayout from '@/views/homes/Layout/index.vue'
import exampleRoutes from '@/router/routes/example'

const routes: RouteRecordRaw[] = [
  {
    name: 'HomeLayout',
    path: '/',
    component: HomeLayout,
    children: [
      {
        name: 'HomeIndex',
        path: '',
        component: () => import('@/views/homes/Home/index.vue'),
      },
      ...exampleRoutes,
    ],
  },
  {
    name: 'NotFoundError',
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/errors/Notfound/index.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
