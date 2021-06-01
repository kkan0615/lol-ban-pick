<template>
  <div
    class="h-full w-full"
    @drop.prevent="dropToBox"
    @dragover.prevent="dropOverBox"
    @dragenter.prevent="dropOverBox"
  >
    <!--  input  -->
    <input
      ref="inputRef"
      type="file"
      hidden
      alt=""
      :multiple="multiple"
      :accept="accept"
      @change="onChangeInput"
    >
    <!-- button -->
    <div
      class="h-full flex items-center justify-center ring-1"
    >
      <div
        class="p-2 rounded-full ring-1"
      >
        <t-button
          text
          class="text-primary-500 rounded-full"
          @click="onClickAddButton"
        >
          <t-material-icon>
            add
          </t-material-icon>
        </t-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref, useContext } from 'vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'
import TButton from '@/components/tailwind/Button/index.vue'
import { CustomFile } from '@/interfaces/system/file'

export default defineComponent({
  name: 'TFileDragAndDrop',
  components: { TButton, TMaterialIcon },
  props: {
    multiple: {
      type: Boolean,
      required: false,
      default: false,
    },
    accept: {
      type: String,
      required: false,
      default: '*/*',
    },
  },
  setup () {
    const { emit } = useContext()

    const inputRef = ref<HTMLInputElement | null>(null)

    const uploadFile = (files: Array<CustomFile>) => {
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        const reader = new FileReader()
        reader.onload = el => {
          if (!el.target)
            return

          file.href = el.target.result as string
          file.fileName = file.name
          emit('uploaded', file)
        }
        reader.readAsDataURL(file)
        reader.onerror = error => {
          console.error(error)
        }
      }
    }

    const dropOverBox = (event: DragEvent) => {
      if (!event.dataTransfer || !event.currentTarget)
        return

      event.stopPropagation()
      event.dataTransfer.dropEffect = 'copy'
    }

    const dropToBox = (event: DragEvent) => {
      if (!event.dataTransfer || !event.currentTarget)
        return

      event.stopPropagation()

      const fileArr = Array.from(event.dataTransfer.files)
      uploadFile(fileArr as Array<CustomFile>)

    }

    /**
     * For click event on add button
     */
    const onClickAddButton = () => {
      if (inputRef.value) {
        inputRef.value.click()
      }
    }

    /**
     * handle input change event, run after selecting files
     * @param event - input event
     */
    const onChangeInput = (event: Event) => {
      const target = event.target as HTMLInputElement
      if (!target || !target.files)
        return

      const fileArr = Array.from(target.files)
      uploadFile(fileArr as Array<CustomFile>)
    }

    return {
      inputRef,
      onClickAddButton,
      onChangeInput,
      dropOverBox,
      dropToBox,
    }
  }
})
</script>
