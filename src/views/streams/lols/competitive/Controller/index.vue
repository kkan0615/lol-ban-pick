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
        <div>
          {{ status }}
        </div>
        <v-btn
          v-if="status !== 'running' && status !== 'pause'"
          color="primary"
          @click="onClickStartBtn"
        >
          Start game
        </v-btn>
        <v-btn
          v-if="status === 'pause'"
          color="primary"
          @click="onClickContinueBtn"
        >
          Continue game
        </v-btn>
        <v-btn
          v-if="status === 'running'"
          color="primary"
          @click="onClickPauseBtn"
        >
          Pause game
        </v-btn>
        <v-btn
          v-if="status === 'done' || status === 'pause'"
          color="warning"
          @click="onClickRestGameBtn"
        >
          Reset game
        </v-btn>
        <v-btn
          v-if="status === 'done' || status === 'pause'"
          color="error"
          @click="onClickRestAllBtn"
        >
          Reset all
        </v-btn>
      </div>
    </div>
    <div
      class="tw-grow tw-h-1"
    >
      <div
        class="tw-flex tw-h-full tw-space-x-4"
      >
        <div
          class="tw-w-1/5"
        >
          left
          <v-text-field
            v-model="blueTeam.name"
            label="Team name"
          />
          <v-text-field
            v-model="blueTeam.win"
            label="Team win"
            type="number"
          />
        </div>
        <div
          class="tw-w-3/5 tw-h-full"
        >
          <LolChampionList
            :version="version"
            :champion-list="Object.values(championList)"
            :disable="status !== 'running'"
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
const { status, blueTeam, redTeam } = storeToRefs(streamStore)

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

const onClickStartBtn = () => {
  status.value = 'running'
  console.log('blueTeam', blueTeam.value)
  console.log('redTeam', redTeam.value)
  broadcastChannel.value?.postMessage({ key: LolStreamChannelKey.START_GAME, data: JSON.stringify({
    blueTeam: blueTeam.value,
    redTeam: redTeam.value
  }) })
}

const onClickPauseBtn = () => {
  status.value = 'pause'
  broadcastChannel.value?.postMessage({ key: LolStreamChannelKey.PAUSE_GAME })
}

const onClickContinueBtn = () => {
  status.value = 'running'
  broadcastChannel.value?.postMessage({ key: LolStreamChannelKey.CONTINUE_GAME })
}

const onClickRestGameBtn = () => {
  streamStore.resetGame()
  broadcastChannel.value?.postMessage({ key: LolStreamChannelKey.RESET_GAME })

}

const onClickRestAllBtn = () => {
  broadcastChannel.value?.postMessage({ key: LolStreamChannelKey.CONTINUE_GAME })
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
