<template>
  <div
    class="w-full h-full"
  >
    <img
      v-if="!innerLoading && !errorStatus"
      :alt="alt"
      :src="src"
      :loading="loading"
      @load="onLoadImage"
      @error="onErrorImage"
    >
    <div
      v-else-if="innerLoading && !errorStatus"
      class="h-full w-full flex items-center justify-center"
    >
      <t-loader-spinner />
    </div>
    <div
      v-else
      class="h-full w-full flex items-center justify-center"
    >
      error
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, } from 'vue'
import TLoaderSpinner from '@/components/tailwind/loader/Spinner/index.vue'

export default defineComponent({
  name: 'TImage',
  components: { TLoaderSpinner },
  props: {
    src: {
      type: String,
      required: true,
      default: '',
    },
    alt: {
      type: String,
      required: true,
      default: '',
    },
    loading: {
      type: String,
      required: false,
      default: 'eager',
    },
  },
  setup () {
    const innerLoading = ref(false)
    const errorStatus = ref(false)

    onMounted(() => {
      updateLoadingStatus(true)
    })

    const updateLoadingStatus = (bool: boolean) => {
      innerLoading.value = bool
    }

    const onLoadImage = () => {
      updateLoadingStatus(false)
    }

    const onErrorImage = () => {
      errorStatus.value = true
    }

    return {
      innerLoading,
      errorStatus,
      onLoadImage,
      onErrorImage,
    }
  }
})
</script>
