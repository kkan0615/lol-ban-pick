import { SnackbarOption } from '@/interfaces/system/snackbar'

export interface ApplicationState {
  subNavigator: boolean
  navigator: boolean
  userNavigator: boolean
  snackbar: SnackbarOption
}

/**
 * navigator
 */
export const applicationState: ApplicationState = {
  subNavigator: true,
  navigator: true,
  userNavigator: true,
  snackbar: {} as SnackbarOption
}
