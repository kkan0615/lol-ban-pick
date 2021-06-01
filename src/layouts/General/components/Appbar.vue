<template>
  <t-appbar
    class="shadow-lg h-10"
    text-color="white"
  >
    <t-button
      text
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

export default defineComponent({
  name: 'AppbarGeneralLayout',
  components: { TMaterialIcon, TButton, TAppbar },
  setup () {
    return
  }
})
</script>
