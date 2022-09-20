import { RouteRecordRaw } from 'vue-router'
import StreamLayout from '@/views/streams/Layout/index.vue'

const streamRoutes: RouteRecordRaw[] = [
  {
    name: 'StreamLayout',
    path: '/streams',
    component: StreamLayout,
    // redirect: { name: 'ExampleIndex' },
    children: [
      {
        name: 'StreamLolLayout',
        path: 'lols',
        component: () => import('@/views/streams/lols/Layout/index.vue'),
        children: [
          {
            name: 'StreamLolCompetitiveLayout',
            path: 'competitive',
            component: () => import('@/views/streams/lols/competitive/Layout/index.vue'),
            children: [
              {
                name: 'StreamLolCompetitiveView',
                path: 'view',
                component: () => import('@/views/streams/lols/competitive/View/index.vue'),
              },
              {
                name: 'StreamLolCompetitiveController',
                path: 'controller',
                component: () => import('@/views/streams/lols/competitive/Controller/index.vue'),
              },
            ]
          },
        ]
      },
    ]
  }
]

export default streamRoutes
