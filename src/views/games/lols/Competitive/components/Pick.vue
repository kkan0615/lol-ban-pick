<template>
  <div
    class="tw-h-[300px] tw-border tw-w-full tw-relative"
    :class="{
      'tw-border-blue-500': !red,
      'tw-border-red-500': red,
    }"
  >
    <img
      v-if="pick.champion"
      class="tw-h-full tw-absolute"
      :src="src"
    >
    <div
      v-if="pick.spellList"
      class="tw-absolute tw-space-x-2 tw-bottom-0 tw-left-0 tw-flex tw-w-full tw-p-2"
    >
      <LolSummonSpellMenu
        :model-value="pick.spellList[0]"
        :other-summon-spell="pick.spellList[1]"
        :items="ClassicSummonSpellList"
        :version="version"
        @update:model-value="onUpdateFirstSummonSpell"
      />
      <LolSummonSpellMenu
        :model-value="pick.spellList[1]"
        :other-summon-spell="pick.spellList[0]"
        :items="ClassicSummonSpellList"
        :version="version"
        @update:model-value="onUpdateSecondSummonSpell"
      />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'LolCompetitivePick',
}
</script>
<script setup lang="ts">
import { defineProps } from 'vue'
import { LolCompetitivePick } from '@/types/models/lols/competitive'
import useLolStore from '@/store/modules/lol'
import { storeToRefs } from 'pinia'
import LolSummonSpellMenu from '@/components/lols/SpellMenu/index.vue'
import useLolCompetitiveStore from '@/store/modules/lolCompetivie'
import { LolSummonSpell } from '@/types/models/lols/summonSpell'

const lolStore = useLolStore()
const competitiveStore = useLolCompetitiveStore()

interface Props {
  pick: LolCompetitivePick
  index: number
  red?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  pick: () => ({} as LolCompetitivePick),
  index: 0,
  red: false
})

const { ClassicSummonSpellList, version } = storeToRefs(lolStore)
const { blueTeamPickList, redTeamPickList } = storeToRefs(competitiveStore)

const src = computed(() => props.pick.champion ? `/lolCdnApi/img/champion/loading/${props.pick.champion.id}_0.jpg` : '')

const onUpdateFirstSummonSpell = (newSummonSpell: LolSummonSpell) => {
  console.log('test')
  if (props.red) {
    redTeamPickList.value[props.index].spellList[0] = newSummonSpell
  } else{
    blueTeamPickList.value[props.index].spellList[0] = newSummonSpell
  }
}

const onUpdateSecondSummonSpell = (newSummonSpell: LolSummonSpell) => {
  if (props.red) {
    redTeamPickList.value[props.index].spellList[1] = newSummonSpell
  } else{
    blueTeamPickList.value[props.index].spellList[1] = newSummonSpell
  }
}
</script>
