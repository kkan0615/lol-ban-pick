<template>
  <t-appbar
    class="shadow-lg h-10 bg-primary-500"
    text-color="white"
  >
    <t-button
      text
      @click="onClickMenuButton"
    >
      <t-material-icon>
        menu
      </t-material-icon>
    </t-button>
  </t-appbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TAppbar from '@/components/tailwind/layouts/Appbar/index.vue'
import TButton from '@/components/tailwind/Button/index.vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'
import useStore from '@/store'
import { ApplicationActionTypes } from '@/store/modules/application/actions'

export default defineComponent({
  name: 'AppbarGeneralLayout',
  components: { TMaterialIcon, TButton, TAppbar },
  setup () {
    const store = useStore()

    const onClickMenuButton = async () => {
      await store.dispatch(ApplicationActionTypes.CHANGE_NAVIGATOR)
    }

    return {
      onClickMenuButton,
    }
  }
})
</script>
