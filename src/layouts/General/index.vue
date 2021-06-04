<template>
  <main
    class="h-full w-full"
  >
    <div
      class="h-full flex flex-col"
    >
      <appbar-general-layout
        class="flex-shrink flex-grow-0"
      />
      <div
        class="flex-grow flex-shrink-0"
      >
        <router-view
          v-slot="{ Component }"
        >
          <transition
            name="fade"
            mode="out-in"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import useStore from '@/store'
import MyInfoGeneralLayout from '@/layouts/General/components/MyInfo.vue'
import AppbarGeneralLayout from '@/layouts/General/components/Appbar.vue'

export default defineComponent({
  name: 'GeneralLayout',
  components: { AppbarGeneralLayout, MyInfoGeneralLayout },
  setup () {
    const store = useStore()

    return
  }
})
</script>
