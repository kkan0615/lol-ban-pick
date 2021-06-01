import { RouteRecordRaw } from 'vue-router'
import LolBanPickLayout from '@/layouts/LolBanpick/index.vue'

export const routes: RouteRecordRaw = {
  path: 'lol',
  name: 'LolBanPickLayout',
  component: LolBanPickLayout,
  redirect: { name: 'RankBankPickLol' },
  children: [
    {
      path: 'banPick/rank',
      name: 'RankBankPickLol',
      component: () => import('@/views/lol/banPicks/Rank/index.vue'),
      meta: {
        hidden: true,
        requiredLogin: true,
      },
    },
  ]
}

export default routes
