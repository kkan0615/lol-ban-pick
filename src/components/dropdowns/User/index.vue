<template>
  <t-dropdown-menu>
    <template
      #activator
    >
      <t-material-icon>
        person
      </t-material-icon>
    </template>
    <div class="px-4 py-3">
      <p class="text-sm leading-5">
        Signed in as
      </p>
      <p class="text-sm font-medium leading-5 text-gray-900 truncate">
        tom@example.com
      </p>
    </div>
    <content-user-dropdown />
  </t-dropdown-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TDropdownMenu from '@/components/tailwind/dropMenu/Down/index.vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'
import ContentUserDropdown from '@/components/dropdowns/User/components/Content.vue'

export default defineComponent({
  name: 'UserDropdown',
  components: { ContentUserDropdown, TMaterialIcon, TDropdownMenu },
  setup () {
    return
  }
})
</script>
