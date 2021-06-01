<template>
  <t-dropdown-menu>
    <template
      #activator
    >
      <div
        class="text-center sm:w-16"
      >
        <t-material-icon
          class="sm:text-4xl text-md"
        >
          notifications
        </t-material-icon>
        <div
          class="hidden sm:block"
        >
          알림
        </div>
      </div>
    </template>
  </t-dropdown-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'
import TDropdownMenu from '@/components/tailwind/dropMenu/Down/index.vue'

export default defineComponent({
  name: 'NotificationMenu',
  components: { TDropdownMenu, TMaterialIcon },
  setup () {
    return
  }
})
</script>
