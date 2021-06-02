<template>
  <t-list
    class="ring"
    :class="{
      ring: selectTurn,
      [`ring-${ringColor}`]: !!ringColor,
    }"
  >
    <t-list-item>
      <t-list-item-avatar>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwV09qWV7M8gD0IddZkh6hbWARfp7DcZ8nRQ&usqp=CAU"
          alt="ahri"
        >
      </t-list-item-avatar>
      <t-list-item-content>
        <t-list-item-content-tittle>
          test
        </t-list-item-content-tittle>
      </t-list-item-content>
    </t-list-item>
  </t-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TList from '@/components/tailwind/List/index.vue'
import TListItem from '@/components/tailwind/List/components/item.vue'
import TListItemAvatar from '@/components/tailwind/List/components/itemAvatar.vue'
import TListItemContent from '@/components/tailwind/List/components/itemContent.vue'
import TListItemContentTittle from '@/components/tailwind/List/components/itemContentTittle.vue'

export default defineComponent({
  name: 'UserPicker',
  components: { TListItemContentTittle, TListItemContent, TListItemAvatar, TListItem, TList },
  props: {
    selectTurn: {
      type: Boolean,
      required: false,
      default: false,
    },
    ringColor: {
      type: String,
      required: false,
      default: 'primary-500',
    }
  },
  setup () {
    return
  }
})
</script>
