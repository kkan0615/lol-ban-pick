<template>
  <div
    class="page-container"
  >
    <div
      class="tw-grow-0 tw-shrink"
    >
      <div>
        {{ version }}
      </div>
      <div>
        {{ language }}
      </div>
    </div>
    <div
      class="tw-grow tw-h-1"
    >
      <div
        class="tw-flex tw-h-full"
      >
        <div
          class="tw-w-1/5"
        >
          left
        </div>
        <div
          class="tw-w-3/5 tw-h-full"
        >
          <LolChampionList
            :version="version"
            :champion-list="Object.values(championList)"
            @click="clickChampion"
          />
        </div>
        <div
          class="tw-w-1/5"
        >
          right
        </div>
      </div>
    </div>
    <div>
      bottom
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'StreamLolCompetitiveController',
}
</script>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import useLolStore from '@/store/modules/lol'
import { storeToRefs } from 'pinia'
import LolChampionList from '@/components/lols/ChampionList/index.vue'
import { LolChampionBanPick } from '@/types/models/lols/champion'
import useLolCompetitiveStreamStore from '@/store/modules/lolCompetitiveStream'

const route = useRoute()
const lolStore = useLolStore()
const streamStore = useLolCompetitiveStreamStore()

const { version, language, championList } = storeToRefs(lolStore)

const broadcastChannel = ref<BroadcastChannel | null>(null)

const _openChannel = () => {
  const { channel } = route.query
  if (channel) {
    broadcastChannel.value = new BroadcastChannel(channel as string)
    setTimeout(() => {
      broadcastChannel.value?.postMessage({ key: 'test', data: 'test' })
    }, 1000)
  }
}

const _destroyChannel = () => {
  if (broadcastChannel.value) {
    broadcastChannel.value.close()
    broadcastChannel.value = null
  }
}

const clickChampion = (champion: LolChampionBanPick) => {
  streamStore.nextStep(champion.champion)
}

/* Created */

_openChannel()

onBeforeUnmount(() => {
  _destroyChannel()
})
</script>
<style
  lang="scss"
  scoped
>
@import "./index.scss";
</style>
