<template>
  <div
    class="flex items-center"
  >
    <t-button>
      <t-material-icon>
        keyboard_arrow_left
      </t-material-icon>
    </t-button>
    <t-button>
      <t-material-icon>
        keyboard_arrow_right
      </t-material-icon>
    </t-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TButton from '@/components/tailwind/Button/index.vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'

export default defineComponent({
  name: 'TCarouselList',
  components: { TMaterialIcon, TButton },
  props: {
    visibleCount: {
      type: Number,
      required: false,
      default: 5,
    },
  },
  setup () {
    return
  }
})
</script>
