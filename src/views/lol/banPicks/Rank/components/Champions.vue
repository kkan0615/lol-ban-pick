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
          placeholder="Search"
        />
      </div>
    </div>
    <t-grid
      class="flex-grow flex-shrink-0 h-16 overflow-y-auto"
      :cols="10"
    >
      <champion-rank-bank-pick-lol
        v-for="champion in champions"
        :key="champion.key"
        :champion="champion"
      />
    </t-grid>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import useStore from '@/store'
import TGrid from '@/components/tailwind/grid/Default/index.vue'
import ChampionRankBankPickLol from '@/views/lol/banPicks/Rank/components/Chamipon.vue'
import TTextInput from '@/components/tailwind/input/Text/index.vue'

export default defineComponent({
  name: 'ChampionsRankBankPickLol',
  components: { TTextInput, ChampionRankBankPickLol, TGrid },
  setup () {
    const store = useStore()

    const champions = computed(() => Object.values(store.state.commonCode.lolChampions)
      .sort((a, b) => (a.name > b.name) || -(a.name < b.name)))

    return {
      champions
    }
  }
})
</script>
