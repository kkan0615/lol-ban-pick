<template>
  <div
    class="absolute bottom-5 left-8 flex flex-col space-y-2"
  >
    <transition
      enter-active-class="transition ease-in duration-200"
      enter-from-class="transform opacity-0 translate-y-2"
      enter-to-class="transform opacity-100"
      leave-active-class="transition ease-out duration-500"
      leave-from-class="transform translate-x-0 opacity-100"
      leave-to-class="transform translate-x-full opacity-0"
    >
      <t-toast
        v-if="currentSnackbar.status"
        :status="currentSnackbar.status"
      >
        <div>
          {{ currentSnackbar.content }}
        </div>
      </t-toast>
    </transition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import TToast from '@/components/tailwind/Toast/index.vue'
import useStore from '@/store'
import { ApplicationActionTypes } from '@/store/modules/application/actions'

export default defineComponent({
  name: 'Snackbar',
  components: { TToast },
  setup () {
    const store = useStore()
    const currentSnackbar = computed(() => store.state.application.snackbar)

    onMounted(() => {
      store.subscribeAction((action => {
        console.log(action)
        if (action.type === ApplicationActionTypes.SHOW_SNACKBAR) {
          setSnackbarTimer()
        }
      }))
    })

    const setSnackbarTimer = (time = 2500) => {
      setTimeout(async () => {
        await store.dispatch(ApplicationActionTypes.REMOVE_SNACKBAR)
      }, time)
    }

    return {
      currentSnackbar,
    }
  }
})
</script>
