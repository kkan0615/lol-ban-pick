<template>
  <div class="py-1">
    <t-list>
      <t-list-item
        role="menuitem"
      >
        <t-list-item-avatar>
          <t-material-icon>
            logout
          </t-material-icon>
        </t-list-item-avatar>
        <t-list-item-content>
          <t-list-item-content-tittle>
            Logout
          </t-list-item-content-tittle>
        </t-list-item-content>
      </t-list-item>
      <t-list-item
        role="menuitem"
      >
        <t-list-item-avatar>
          <t-material-icon>
            person
          </t-material-icon>
        </t-list-item-avatar>
        <t-list-item-content>
          <t-list-item-content-tittle>
            Profile
          </t-list-item-content-tittle>
        </t-list-item-content>
      </t-list-item>
    </t-list>
    <a
      href="javascript:void(0)"
      tabindex="0"
      class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
      role="menuitem"
    >Account settings</a>
    <a
      href="javascript:void(0)"
      tabindex="1"
      class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
      role="menuitem"
    >Support</a>
    <span
      role="menuitem"
      tabindex="-1"
      class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
      aria-disabled="true"
    >New feature (soon)</span>
    <a
      href="javascript:void(0)"
      tabindex="2"
      class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
      role="menuitem"
    >License</a>
  </div>
  <div class="py-1">
    <a
      href="javascript:void(0)"
      tabindex="3"
      class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
      role="menuitem"
    >Sign out</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TList from '@/components/tailwind/List/index.vue'
import TListItem from '@/components/tailwind/List/components/item.vue'
import TListItemAvatar from '@/components/tailwind/List/components/itemAvatar.vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'
import TListItemContent from '@/components/tailwind/List/components/itemContent.vue'
import TListItemContentTittle from '@/components/tailwind/List/components/itemContentTittle.vue'

export default defineComponent({
  name: 'ContentUserDropdown',
  components: { TListItemContentTittle, TListItemContent, TMaterialIcon, TListItemAvatar, TListItem, TList },
  setup () {
    return
  }
})
</script>
