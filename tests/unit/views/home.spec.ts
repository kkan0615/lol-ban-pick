// https://www.gitmemory.com/issue/vuejs/vue-test-utils-next/242/726753759

import { flushPromises, mount } from '@vue/test-utils'
import Home from '@/views/Home/index.vue'
import { VueWrapper } from '@vue/test-utils/dist/vueWrapper'
import { ComponentPublicInstance } from 'vue'
import { RouterNameKeyEnum } from '@/types/router/name'

const mockRouterPush = jest.fn()

jest.mock('vue-router', () => ({
  useRouter: () => ({
    push: mockRouterPush,
  }),
}))

describe('home/index.vue', () => {
  let wrapper: null | VueWrapper<ComponentPublicInstance<any>> = null

  beforeEach(async () => {
    jest.resetAllMocks()

    wrapper = mount(Home)
  })

  it('should ', () => {
    expect(wrapper).not.toBeNull()
  })

  it('rendered', () => {
    if (wrapper) {
      expect(wrapper.text()).toMatch('League Of Legend Rank ban')
      expect(wrapper.text()).toMatch('League Of Legend Competition ban')
    }
  })

  it('move to lol rank ban', async () => {
    if (wrapper) {
      const found = wrapper.find('#lol-rank-ban-card')
      expect(found).not.toBeNull()
      await found.trigger('click')
      await flushPromises()
      expect(mockRouterPush).toBeCalledWith({ name: RouterNameKeyEnum.RANK_BAN_PICK_LOL })
    }
  })

  it('move to lol competition ban', async () => {
    if (wrapper) {
      const found = wrapper.find('#lol-competition-ban-card')
      expect(found).not.toBeNull()
      await found.trigger('click')
      await flushPromises()
      expect(mockRouterPush).toBeCalledWith({ name: RouterNameKeyEnum.COMPETITION_RANK_PICK_LOL })
    }
  })

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount()
      wrapper = null
    }
  })
})
