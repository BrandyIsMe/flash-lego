<template>
  <div class="lego-color-picker">
    <div class="native-color-container">
      <input
        type="color"
        :value="value"
        @input="onChange(($event.target as HTMLInputElement).value)"
      />
    </div>
    <ul class="picked-color-list">
      <li
        v-for="(item, key) in colors"
        :key="key"
        :class="`item-${key}`"
        @click.prevent="onChange(item)"
      >
        <div
          :style="{ backgroundColor: item }"
          class="color-item"
          v-if="item.startsWith('#')"
        ></div>
        <div v-else class="transparent-back"></div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
const defaultColors = [
  '#ffffff',
  '#f5222d',
  '#fa541c',
  '#fadb14',
  '#52c41a',
  '#6922c6',
  '#722ed1',
  '#8c8c8c',
  '#000000',
  ''
]
export default defineComponent({
  props: {
    value: {
      type: String
    },
    colors: {
      type: Array as PropType<string[]>,
      default: () => defaultColors
    }
  },
  setup(_, context) {
    const onChange = (color: string) => {
      context.emit('change', color)
    }

    return {
      onChange
    }
  }
})
</script>

<style lang="less">
.lego-color-picker {
  display: flex;
  justify-content: space-between;
  .native-color-container {
    height: 40px;
    flex: 0.5;
    input {
      width: 40px;
      height: 40px;
      outline: none;
      border: none;
      padding: 0;
    }
  }
  .picked-color-list {
    height: 40px;
    width: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    li {
      width: 30px;
      height: 15px;
      .color-item {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        border: 1px solid #ededed;
      }
    }
  }
}
</style>
