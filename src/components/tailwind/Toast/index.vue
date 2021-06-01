<template>
  <div
    class="flex items-center text-white max-w-sm w-full shadow-md rounded-lg overflow-hidden"
    :class="wrapperClasses"
    style="min-width: 300px"
  >
    <div class="w-10 border-r p-2">
      <t-material-icon
        v-if="status === 'success'"
      >
        check_circle
      </t-material-icon>
      <t-material-icon
        v-else-if="status === 'danger'"
      >
        check_circle
      </t-material-icon>
      <t-material-icon
        v-else-if="status === 'warning'"
      >
        check_circle
      </t-material-icon>
      <t-material-icon
        v-else-if="status === 'info'"
      >
        check_circle
      </t-material-icon>
    </div>

    <div class="mx-3">
      <slot />
    </div>
    <t-button
      v-if="closable"
      class="ml-auto mr-3"
      text
      @click="onClickCloseButton"
    >
      <t-material-icon>
        close
      </t-material-icon>
    </t-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from 'vue'
import { TToastStatusType } from '@/components/tailwind/Toast/types'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'
import TButton from '@/components/tailwind/Button/index.vue'

export default defineComponent({
  name: 'TToast',
  components: { TButton, TMaterialIcon },
  props: {
    status: {
      type: String as TToastStatusType,
      required: false,
      default: 'success' as TToastStatusType,
    },
    closable: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  setup (props) {
    const { emit } = useContext()

    const wrapperClasses = computed(() => {
      const status = props.status as TToastStatusType
      return {
        'bg-green-400': status === 'success',
        'bg-red-400': status === 'danger',
        'bg-yellow-400': status === 'warning',
        'bg-blue-400': status === 'info',
      }
    })

    const onClickCloseButton = (event: MouseEvent) => {
      emit('click:close', event)
    }

    return {
      wrapperClasses,
      onClickCloseButton,
    }
  }
})
</script>
