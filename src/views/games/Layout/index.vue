<template>
  <QLayout>
    <Suspense>
      <RouterView />
      <template
        #fallback
      >
        loading...
      </template>
    </Suspense>
    <q-footer>
      <div
        class="page-content tw-max-w-[1600px] tw-py-2 tw-text-center tw-space-x-2"
      >
        <UseDarkBtn />
        <TranslateBtn />
      </div>
    </q-footer>
  </QLayout>
</template>
<script lang="ts">
export default {
  name: 'GameLayout',
}
</script>
<script setup lang="ts">
import UseDarkBtn from '@/components/buttons/UseDark/index.vue'
import TranslateBtn from '@/components/buttons/Translation/index.vue'
</script>

