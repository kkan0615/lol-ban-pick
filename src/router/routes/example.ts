import { RouteRecordRaw } from 'vue-router'
import ExampleLayout from '@/views/examples/Layout/index.vue'

const exampleRoutes: RouteRecordRaw[] = [
  {
    name: 'ExampleLayout',
    path: '/example',
    component: ExampleLayout,
    redirect: { name: 'ExampleIndex' },
    children: [
      {
        name: 'ExampleIndex',
        path: '',
        component: () => import('@/views/examples/Home/index.vue'),
      },
      {
        name: 'ExamplePinia',
        path: 'pinia',
        component: () => import('@/views/examples/Pinia/index.vue'),
      },
    ]
  }
]

export default exampleRoutes
