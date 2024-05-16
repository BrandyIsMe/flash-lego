<template>
  <UpLoader action="test" />
  <a-layout class="layout">
    <a-layout-sider width="300" class="left-sider">
      <ComponentList :list="defaultTextTemplates" @on-item-click="addItem" />
    </a-layout-sider>
    <a-layout-content class="content">
      <div class="content-area">
        <EditWrapper
          :id="component.id"
          v-for="component in components"
          :key="component.id"
          :active="getcurrentElement?.id === component.id"
          @set-active="setActive"
        >
          <component :is="component.name" v-bind="component.props" />
        </EditWrapper>
      </div>
    </a-layout-content>
    <a-layout-sider width="300" class="right-sider">
      组件属性
      <PropsTable
        v-if="getcurrentElement && getcurrentElement.props"
        :propData="getcurrentElement.props"
        @change="handleChange"
      />
    </a-layout-sider>
  </a-layout>
</template>

<script lang="ts">
import { useEditorInfo } from '@/store/modules/editor'
import { storeToRefs } from 'pinia'
import { defineComponent } from 'vue'
import FText from '@/components/FComponents/FText.vue'
import ComponentList from '@/components/ComponentList.vue'
import { defaultTextTemplates } from '@/defaultTemplates'
import EditWrapper from '@/components/EditWrapper.vue'
import PropsTable from '@/components/PropsTable.vue'
import UpLoader from '@/components/UpLoader.vue'
export default defineComponent({
  components: {
    FText,
    ComponentList,
    EditWrapper,
    PropsTable,
    UpLoader
  },
  setup() {
    const editor = useEditorInfo()
    const { components, getcurrentElement } = storeToRefs(editor)
    const { addComponent, setComponentActive, updateComponent } = editor
    const addItem = (data: { [key: string]: unknown }) => {
      addComponent(data)
    }
    const setActive = (id: string) => {
      setComponentActive(id)
    }
    const handleChange = (e: { [key: string]: string | number }) => {
      console.log(e)

      updateComponent(e)
    }
    return {
      components,
      editor,
      defaultTextTemplates,
      getcurrentElement,
      addItem,
      setActive,
      handleChange
    }
  }
})
</script>

<style lang="less" scoped>
.layout {
  background: #fff;
}
.left-sider {
  height: calc(100vh - 90px);
  background: #fff;
}
.content {
  height: calc(100vh - 90px);
  background: #ededed;

  .content-area {
    position: relative;
    min-width: 500px;
    height: 100%;
  }
}
.right-sider {
  width: 500px;
  height: calc(100vh - 90px);
  background: #fff;
}
</style>
