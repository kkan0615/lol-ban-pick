<template>
  <div
    class="text-center sm:w-16 cursor-pointer"
    @click="onClickSell"
  >
    <t-material-icon
      class="sm:text-4xl text-md"
    >
      storefront
    </t-material-icon>
    <div
      class="hidden sm:block"
    >
      판매하기
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'SellMenu',
  components: { TMaterialIcon },
  setup () {
    const router = useRouter()

    const onClickSell = async () => {
      await router.push({ name: 'ProductFormNew' })
    }

    return {
      onClickSell
    }
  }
})
</script>
