<template>
  <div
    class="rounded-t border-2"
  >
    <div
      class="flex items-center border-transparent h-full"
    >
      <div
        class="w-2 h-full mr-2"
        :class="{
          [`bg-${color}-500`]: selectTurn,
        }"
      />

      <div
        class="py-1 px-2 flex items-center"
      >
        <div>
          <img
            v-if="champion && champion.key"
            class="rounded-full w-16 h-16 ring rounded-full"
            :class="{
              [`ring-${color}-300`]: true,
            }"
            :src="imageSrc"
            :alt="champion.name"
          >
          <div
            v-else
            class="w-16 h-16 ring bg-gray-500 rounded-full"
            :class="{
              [`ring-${color}-300`]: true,
            }"
          />
        </div>
        <div
          v-if="champion"
          class="ml-4"
        >
          {{ champion.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'LolUserPicker',
  props: {
    selectTurn: {
      type: Boolean,
      required: false,
      default: false,
    },
    color: {
      type: String,
      required: false,
      default: 'primary-500',
    },
    champion: {
      type: Object,
      required: false,
      default: () => {},
    }
  },
  setup (props) {
    const imageSrc = computed(() => `http://ddragon.leagueoflegends.com/cdn/${props.champion.version}/img/champion/${props.champion.image.full}`)

    return {
      imageSrc
    }
  }
})
</script>
