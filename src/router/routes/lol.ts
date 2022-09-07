import { RouteRecordRaw } from 'vue-router'
import LolLayout from '@/views/lols/Layout/index.vue'

const lolRoutes: RouteRecordRaw[] = [
  {
    name: 'LolLayout',
    path: '/lol',
    component: LolLayout,
    redirect: { name: 'LolIndex' },
    children: [
      {
        name: 'LolIndex',
        path: '',
        component: () => import('@/views/lols/Home/index.vue'),
      },
      {
        name: 'LolCompetition',
        path: 'competition',
        component: () => import('@/views/lols/Competition/index.vue'),
      },
    ]
  }
]

export default lolRoutes
