<template>
  <div
    class="mr-2 p-1 ring-2 cursor-pointer"
    @click="onClickToList('new')"
  >
    방금 등록
  </div>
  <div
    class="p-1 ring-2 cursor-pointer"
    @click="onClickToList('deadline')"
  >
    마감 임박
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { ProductStatusType } from '@/interfaces/model/product/status'

export default defineComponent({
  name: 'HeaderBottomMenus',
  setup () {
    const router = useRouter()

    const onClickToList = async (status: ProductStatusType) => {
      await router.push({ name: 'ProductList', query: { status, } })
    }

    return {
      onClickToList
    }
  }
})
</script>
