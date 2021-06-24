import { SnackbarOption } from '@/types/system/snackbar'
import useStore from '@/store'
import { ApplicationActionTypes } from '@/store/modules/application/actions'

export const useSnackbarPlugin = () => {
  const store = useStore()

  const showSnackbar = async (payload: SnackbarOption) => {
    await store.dispatch(ApplicationActionTypes.SHOW_SNACKBAR, payload)
  }

  return {
    showSnackbar
  }
}

export default useSnackbarPlugin
