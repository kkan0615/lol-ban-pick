import { router } from '@/router'
import { store } from '@/store'
import { DEFAULT_LOL_VERSION } from '@/types/model/lol'
import { ApplicationActionTypes } from '@/store/modules/application/actions'
import { CommonCodeActionTypes } from '@/store/modules/commonCode/actions'

router.beforeEach((async (to, from, next) => {
  console.log(store.state.commonCode)
  if (!store.state.commonCode.lolVersions.length) {
    await store.dispatch(CommonCodeActionTypes.LOAD_LOL_VERSIONS)
  }
  /* Check there is lol version */
  if (!store.state.application.lolVersion) {
    await store.dispatch(CommonCodeActionTypes.LOAD_LOL_VERSIONS)
    /* If versions has been success to load */
    if (store.state.commonCode.lolVersions && store.state.commonCode.lolVersions.length) {
      await store.dispatch(ApplicationActionTypes.SET_LOL_VERSION, store.state.commonCode.lolVersions[0]  || DEFAULT_LOL_VERSION)
    }
  }

  if (!store.state.commonCode.lolChampions.length) {
    await store.dispatch(CommonCodeActionTypes.LOAD_LOL_CHAMPIONS)
  }

  next()
}))
