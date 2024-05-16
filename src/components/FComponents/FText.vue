<template>
  <component
    :is="tag"
    :style="styleProps"
    class="f-text-component"
    @click="handleClick"
  >
    {{ text }}
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useComponentCommon } from '@/hooks/useComponentCommon'
import {
  transformComponentProps,
  textDefaultProps,
  textStylePropsNames
} from '@/defaultProps'
export default defineComponent({
  name: 'FText',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    ...transformComponentProps(textDefaultProps)
  },
  setup(props) {
    const { styleProps, handleClick } = useComponentCommon(
      props,
      textStylePropsNames
    )

    return {
      props,
      styleProps,
      handleClick
    }
  }
})
</script>

<style lang="less" scoped>
.f-text-component {
  width: 100%;
  position: relative !important;
}
</style>
