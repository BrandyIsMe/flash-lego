<template>
  <div class="create-component-list">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="component-item"
      @click="onItemClick(item)"
    >
      <FText v-bind="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import FText from '@/components/FComponents/FText.vue'
export default defineComponent({
  name: 'components-list',
  emits: ['on-item-click'],
  components: {
    FText
  },
  props: {
    list: {
      type: Array as PropType<{ [key: string]: unknown }[]>,
      required: true
    }
  },
  setup(_props, ctx) {
    const onItemClick = <T extends { [key: string]: unknown }>(data: T) => {
      ctx.emit('on-item-click', data)
    }
    return {
      onItemClick
    }
  }
})
</script>

<style lang="less" scoped>
.create-component-list {
  display: flex;
  flex-direction: column;
}
</style>
