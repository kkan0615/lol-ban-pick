import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

export const setDayjsLocalizedFormat = () => {
  dayjs.extend(localizedFormat)
}
