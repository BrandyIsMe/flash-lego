<template>
  <div
    class="edit-wrapper"
    @click="onItemClick(id)"
    :class="{ active: active }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'EditWrapper',
  props: {
    id: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ['set-active'],
  setup(_props, ctx) {
    const onItemClick = (id: string) => {
      ctx.emit('set-active', id)
    }
    return {
      onItemClick
    }
  }
})
</script>

<style lang="less" scoped>
.active {
  position: absolute;
  border: 1px solid #1890ff;
  user-select: none;
  z-index: 1500;
}
</style>
