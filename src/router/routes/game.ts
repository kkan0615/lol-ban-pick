import { RouteRecordRaw } from 'vue-router'
import GameLayout from '@/views/games/Layout/index.vue'

const gameRoutes: RouteRecordRaw[] = [
  {
    name: 'GameLayout',
    path: '/games',
    component: GameLayout,
    children: [
      {
        name: 'LolLayout',
        path: 'lols',
        component: () => import('@/views/games/lols/Layout/index.vue'),
        children: [
          {
            name: 'LolCompetitive',
            path: 'competitive',
            component: () => import('@/views/games/lols/Competitive/index.vue'),
          },
        ]
      },
    ]
  }
]

export default gameRoutes
