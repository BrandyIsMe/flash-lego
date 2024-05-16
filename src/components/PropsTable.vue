<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <div class="props-table">
    <div v-for="(value, key) in finalProps" :key="key" class="prop-item">
      <div class="item-label">{{ value?.text }} :</div>
      <div class="item-component">
        <component
          v-if="value && value.valueProp"
          :is="value.component"
          :[value.valueProp]="value.value"
          v-bind="value.extraProps"
          v-on="value.events"
        >
          <template v-if="value.options">
            <component
              :is="value.subComponent"
              v-for="(option, key) in value.options"
              :key="key"
              :value="option.value"
            >
              {{ option.text }}
            </component>
          </template>
        </component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed, defineProps, defineEmits } from 'vue'
import { reduce } from 'lodash-es'
import { PropsToForms, mapPropsToForms } from '../propsMap'
import { TextComponentProps } from '../defaultProps'
const props = defineProps({
  propData: {
    type: Object as PropType<TextComponentProps>,
    required: true,
    default: () => ({})
  }
})
const emits = defineEmits(['change'])

const finalProps = computed(() =>
  reduce(
    props.propData,
    (result, value, key) => {
      const newKey = key as keyof TextComponentProps
      const item = mapPropsToForms[newKey]
      if (item) {
        item.value = item.initalTransform
          ? item.initalTransform(<string>value)
          : value
        if (!item.valueProp) {
          item.valueProp = 'value'
        }
        if (!item.enventName) {
          item.enventName = 'change'
        }
        if (!item.events) {
          item.events = {
            [item.enventName]: (e: unknown) => {
              emits('change', {
                key,
                value: item.afterTransform ? item.afterTransform(e) : e
              })
            }
          }
        }
        result[newKey] = item
      }

      return result
    },
    {} as PropsToForms
  )
)
</script>

<script lang="ts">
import { defineComponent } from 'vue'
import ColorPicker from './ColorPicker.vue'
export default defineComponent({
  components: {
    ColorPicker
  }
})
</script>

<style lang="less" scoped>
.prop-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 10px;

  .item-label {
    width: 80px;
  }

  .item-component {
    flex: 1;
  }
}
</style>
