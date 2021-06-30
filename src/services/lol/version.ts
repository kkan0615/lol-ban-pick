import defaultAxios from '@/utils/lib/axioses/default'
import { LOL_VERSIONS_URL } from '@/types/model/lol'

export const loadLolVersions = async () => {
  return (await defaultAxios.get<Array<string>>(LOL_VERSIONS_URL)).data
}
