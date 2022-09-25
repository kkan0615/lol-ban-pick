<template>
  <div
    class="page-container"
  >
    <div
      class="tw-flex tw-space-x-2 tw-p-2 tw-grow-0 tw-shrink"
    >
      <div>
        <div>
          <lol-version-select
            :version="version"
            :items="versionList"
            @changed="changeVersion"
          />
        </div>
        <div>
          {{ language }}
        </div>
      </div>
      <div
        class="tw-ml-auto tw-flex tw-space-x-2"
      >
        <v-btn
          color="warning"
        >
          Reset game
        </v-btn>
        <v-btn
          color="error"
        >
          Reset all
        </v-btn>
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
            @clicked="clickChampion"
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
import { LolChampionBanPick } from '@/types/models/lols/champion'
import useLolCompetitiveStreamStore from '@/store/modules/lolCompetitiveStream'
import { LolStreamChannelKey } from '@/types/models/lols/stream'
import LolVersionSelect from '@/components/lols/VersionSelect/index.vue'
import LolChampionList from '@/components/lols/ChampionList/index.vue'

const route = useRoute()
const lolStore = useLolStore()
const streamStore = useLolCompetitiveStreamStore()

const { version, language, versionList, championList } = storeToRefs(lolStore)

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
  broadcastChannel.value?.postMessage({ key: LolStreamChannelKey.NEXT_STEP, data: JSON.stringify(champion) })
}

const changeVersion = (newVersion: string) => {
  lolStore.setVersion(newVersion)
  lolStore.loadChampionList()
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
