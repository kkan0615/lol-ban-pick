<template>
  <div
    class="w-full"
  >
    <!--  label  -->
    <label
      v-if="label"
    >

      <div
        class="block text-sm font-medium text-gray-700 font-bold my-1"
      >
        <slot
          name="label"
        >
          {{ label }}
        </slot>
      </div>
    </label>
    <!--  input part  -->
    <div
      class="flex items-center input-box focus:border-primary-500"
      :class="{
        [`border-2`]: !noRing && !errorStatus,
        [`border-red-500`]: errorStatus,
      }"
    >
      <!--   pre-append   -->
      <div
        class="flex-shrink"
      >
        <slot
          name="preAppend"
        />
      </div>
      <!--   input part   -->
      <div
        class="flex-grow flex items-center"
      >
        <slot />
      </div>
      <!--   count   -->
      <div
        v-if="visibleCount"
        class="flex-shrink mx-2"
      >
        {{ modelValue ? modelValue.toString().length : 0 }} / {{ maxCount }}
      </div>
      <div
        v-if="clearable"
        class="flex-shrink h-full"
      >
        <t-button
          class="h-full"
          color="white"
          text-color="black"
          @click="onClickClearableButton"
        >
          <t-material-icon
            class="rounded-md text-md"
          >
            clear
          </t-material-icon>
        </t-button>
      </div>
      <!--   append   -->
      <div
        class="flex-shrink"
      >
        <slot
          name="append"
        />
      </div>
    </div>
    <!--  error  -->
    <div
      v-if="errorStatus"
      class="text-sm text-red-500 pl-1"
    >
      {{ innerErrorMessage }}
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  onBeforeUnmount,
  onMounted,
  ref,
  useContext
} from 'vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'
import { inputBoxProps } from '@/components/tailwind/input/Base/types/props'
import TButton from '@/components/tailwind/Button/index.vue'
import { InputRuleType } from '@/interfaces/system/rule'
import { TFormProvideKey } from '@/components/tailwind/Form/types'

export default defineComponent({
  name: 'TBaseInput',
  components: { TButton, TMaterialIcon },
  props: {
    ...inputBoxProps
  },
  setup (props) {
    const { emit } = useContext()

    const form = inject(TFormProvideKey)
    const innerErrorMessage = ref<string | boolean>(true)
    const errorStatus = computed(() =>
      typeof props.errorMessage === 'string'
        || !props.errorMessage
        || typeof innerErrorMessage.value === 'string'
        || !innerErrorMessage.value)

    onMounted(() => {
      const instance = getCurrentInstance()
      if (instance && form)
        form.register({ checkValidation, uid: instance.uid } as InstanceType<any>)
    })

    onBeforeUnmount(() => {
      const instance = getCurrentInstance()
      if (instance && form)
        form.unregister(instance.uid)
    })


    const checkValidation = (): boolean | string => {
      const rules = props.rules as Array<InputRuleType>
      if (!rules || rules.length <= 0) {
        innerErrorMessage.value = true
        return innerErrorMessage.value
      }

      for (let i = 0; i < rules.length; i++) {
        const rule = rules[i]
        const modelValue = props.modelValue
        const result = rule(modelValue)

        if (typeof result === 'string') {
          innerErrorMessage.value = result
          return  innerErrorMessage.value
        } else if (!result) {
          innerErrorMessage.value = result
          return innerErrorMessage.value
        }
      }

      innerErrorMessage.value = true
      return innerErrorMessage.value
    }

    const onClickClearableButton = (event: MouseEvent) => {
      emit('click:clearableButton', event)
    }

    return {
      errorStatus,
      innerErrorMessage,
      onClickClearableButton,
      checkValidation,
    }
  }
})
</script>
<style lang="scss" scoped>
@import "./styles/index.scss";
</style>
