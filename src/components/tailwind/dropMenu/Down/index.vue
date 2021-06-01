<template>
  <div class="flex items-center justify-center">
    <div class="relative inline-block text-left dropdown">
      <span
        class="rounded-md shadow-sm"
      >
        <button
          class="inline-flex justify-center w-full transition duration-150 ease-in-out focus:outline-none"
          type="button"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <!--          <span>Options</span>-->
          <!--          <svg-->
          <!--            class="w-5 h-5 ml-2 -mr-1"-->
          <!--            viewBox="0 0 20 20"-->
          <!--            fill="currentColor"-->
          <!--          >-->
          <!--            <path-->
          <!--              fill-rule="evenodd"-->
          <!--              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"-->
          <!--              clip-rule="evenodd"-->
          <!--            />-->
          <!--          </svg>-->
          <slot
            name="activator"
          />
        </button>
      </span>
      <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
        <div
          class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
          role="menu"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref } from 'vue'

export default defineComponent({
  name: 'TDropdownMenu',
  props: {
    openOnHover: {
      type: Boolean,
      require: false,
      default: false,
    }
  },
  setup (props) {
    const open = ref(false)
    const root = ref<HTMLDivElement | null>(null)

    // onBeforeUnmount(() => {
    //   window.removeEventListener('click', onClickOutSide)
    // })

    const handleClose = () => {
      open.value = false
    }

    // const onClickOutSide = (e: MouseEvent) => {
    //   if (root.value && !root.value.contains(e.target)) {
    //     window.removeEventListener('click', onClickOutSide)
    //     handleClose()
    //   }
    // }

    const onClickTarget = () => {
      // window.addEventListener('click', onClickOutSide)
      open.value = !open.value
    }

    const onFocusIn = () => {
      if (props.openOnHover)
        open.value = true
    }

    const onFocusOut = () => {
      if (props.openOnHover)
        open.value = false
    }

    return {
      onClickTarget,
      onFocusIn,
      onFocusOut,
      open,
      root
    }
  }
})
</script>
<style lang="scss" scoped>
.dropdown:focus-within .dropdown-menu {
  opacity:1;
  transform: translate(0) scale(1);
  visibility: visible;
}
</style>
