<template>
  <div
    class="h-full flex flex-col"
  >
    <div
      class="mb-2 flex-shrink flex-grow-0"
    >
      <div
        class="ml-auto w-1/3"
      >
        <t-text-input
          v-model:model-value="searchInput"
          placeholder="Search"
        />
      </div>
    </div>
    <t-grid
      class="flex-grow flex-shrink-0 h-16 overflow-y-auto"
      :cols="10"
    >
      <champion-competition-bank-pick-lol
        v-for="champion in champions"
        :key="champion.key"
        :champion="champion"
        @click:champion="onClickChampion"
      />
    </t-grid>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import useStore from '@/store'
import TGrid from '@/components/tailwind/grid/Default/index.vue'
import ChampionRankBankPickLol from '@/views/lol/banPicks/Rank/components/Chamipon.vue'
import TTextInput from '@/components/tailwind/input/Text/index.vue'
import { LolChampion } from '@/types/model/lol/Champion'
import { LolRanKBanActionTypes } from '@/store/modules/lolRankBan/actions'
import { LolChampionWithKey } from '@/types/model/lol'
import { LolCompetitionBanActionTypes } from '@/store/modules/lolCompetitionBan/actions'
import ChampionCompetitionBankPickLol from '@/views/lol/banPicks/Competition/components/Chamipon.vue'

export default defineComponent({
  name: 'ChampionsCompetitionBankPickLol',
  components: { ChampionCompetitionBankPickLol, TTextInput, TGrid },
  setup () {
    const store = useStore()

    const searchInput = ref('')

    const champions = computed(() => Object.values(store.state.commonCode.lolChampions)
      .sort((a, b) => a.name.localeCompare(b.name)).filter(champion => champion.name.includes(searchInput.value)))

    const onClickChampion = async (champion: LolChampion) => {
      await store.dispatch(LolCompetitionBanActionTypes.HANDLE_CHAMPION_CLICK, champion)
      searchInput.value = ''
    }

    return {
      searchInput,
      champions,
      onClickChampion,
    }
  }
})
</script>
