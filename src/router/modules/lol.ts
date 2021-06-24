import { RouteRecordRaw } from 'vue-router'
import LolBanPickLayout from '@/layouts/LolBanpick/index.vue'
import { RouterNameKeyEnum } from '@/types/router/name'

export const routes: RouteRecordRaw = {
  path: 'lol',
  name: RouterNameKeyEnum.LOL_BAN_PICK_LAYOUT,
  component: LolBanPickLayout,
  redirect: { name: 'RankBankPickLol' },
  children: [
    {
      path: 'banPick/rank',
      name: RouterNameKeyEnum.RANK_BAN_PICK_LOL,
      component: () => import('@/views/lol/banPicks/Rank/index.vue'),
      meta: {
        hidden: true,
        requiredLogin: true,
      },
    },
    {
      path: 'banPick/competition',
      name: RouterNameKeyEnum.COMPETITION_RANK_PICK_LOL,
      component: () => import('@/views/lol/banPicks/Competition/index.vue'),
      meta: {
        hidden: true,
        requiredLogin: true,
      },
    },
  ]
}

export default routes
