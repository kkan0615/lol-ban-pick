<template>
  <div>
    <t-button
      @click="onClickTestButton"
    >
      test
    </t-button>
    <t-list>
      <t-list-item>
        <t-list-item-avatar />
        <t-list-item-content>
          <t-list-item-content-tittle>
            title
          </t-list-item-content-tittle>
          <t-list-item-content-sub-tittle>
            sub
          </t-list-item-content-sub-tittle>
        </t-list-item-content>
      </t-list-item>
    </t-list>
    <t-toast
      closable
    >
      <t-list>
        <t-list-item>
          <t-list-item-avatar />
          <t-list-item-content>
            <t-list-item-content-tittle>
              title
            </t-list-item-content-tittle>
            <t-list-item-content-sub-tittle>
              sub
            </t-list-item-content-sub-tittle>
          </t-list-item-content>
        </t-list-item>
      </t-list>
    </t-toast>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TList from '@/components/tailwind/List/index.vue'
import TListItem from '@/components/tailwind/List/components/item.vue'
import TListItemAvatar from '@/components/tailwind/List/components/itemAvatar.vue'
import TListItemContent from '@/components/tailwind/List/components/itemContent.vue'
import TListItemContentTittle from '@/components/tailwind/List/components/itemContentTittle.vue'
import TListItemContentSubTittle from '@/components/tailwind/List/components/itemContentSubTitle.vue'
import TToast from '@/components/tailwind/Toast/index.vue'
import TButton from '@/components/tailwind/Button/index.vue'
import useSnackbarPlugin from '@/plugins/snackbar'

export default defineComponent({
  name: 'Playground',
  components: { TButton, TToast, TListItemContentSubTittle, TListItemContentTittle, TListItemContent, TListItemAvatar, TListItem, TList },
  setup () {
    const { showSnackbar } = useSnackbarPlugin()

    const onClickTestButton = () => {
      showSnackbar({
        content: 'Test message',
        status: 'info'
      })
    }

    return {
      onClickTestButton,
    }
  }
})
</script>
