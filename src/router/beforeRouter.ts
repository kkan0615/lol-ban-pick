import { router } from '@/router'
import { store } from '@/store'
import defaultAxios from '@/utils/lib/axioses/default'
import { LOL_VERSIONS_URL } from '@/types/model/lol'
import { ApplicationActionTypes } from '@/store/modules/application/actions'
import { CommonCodeActionTypes } from '@/store/modules/commonCode/actions'

router.beforeEach((async (to, from, next) => {
  console.log(store.state.commonCode)
  if (!store.state.commonCode.lolVersions.length) {
    await store.dispatch(CommonCodeActionTypes.LOAD_LOL_VERSIONS)
  }
  /* Check there is lol version */
  if (!store.state.application.lolVersion) {
    const resVersion = (await defaultAxios.get<Array<string>>(LOL_VERSIONS_URL)).data
    if (resVersion) {
      await store.dispatch(ApplicationActionTypes.SET_LOL_VERSION, resVersion[0])
    }
  }

  if (!store.state.commonCode.lolChampions.length) {
    await store.dispatch(CommonCodeActionTypes.LOAD_LOL_CHAMPIONS)
  }

  next()
}))
