import { defineStore } from 'pinia'
import { v4 as uuidV4 } from 'uuid'
import { TextComponentProps } from '@/defaultProps'

interface EditorData {
  //编辑器渲染的数组
  components: ComponentData[]
  //当前编辑的是哪个元素，uuid
  currentElement: string
}

interface ComponentData {
  props: TextComponentProps
  id: string
  name: string
}

const testComponents: ComponentData[] = [
  {
    id: uuidV4(),
    name: 'f-text',
    props: {
      text: 'hello1',
      fontSize: '20px',
      left: '100px',
      lineHeight: '1',
      textAlign: 'left',
      color: '#000000'
    }
  },
  {
    id: uuidV4(),
    name: 'f-text',
    props: {
      text: 'hello2',
      fontSize: '12px',
      left: '100px',
      top: '50px',
      lineHeight: '1',
      textAlign: 'left'
    }
  },
  {
    id: uuidV4(),
    name: 'f-text',
    props: {
      text: 'hello3',
      fontSize: '15px',
      left: '100px',
      top: '100px',
      lineHeight: '1',
      textAlign: 'left'
      // actionType: 'url',
      // url: 'https://www.baidu.com'
    }
  }
]

export const useEditorInfo = defineStore('editor', {
  state: (): EditorData => ({
    components: testComponents,
    currentElement: ''
  }),
  actions: {
    addComponent(props: { [key: string]: unknown }) {
      const id = uuidV4()
      this.components.push({
        id,
        name: 'f-text',
        props
      })
    },
    setComponentActive(id: string) {
      this.currentElement = id
    },
    updateComponent(e: { [key: string]: string | number }) {
      const { key, value } = e
      const updateCurrentElement = this.components.find(
        (component) => component.id === this.currentElement
      )
      if (
        updateCurrentElement &&
        updateCurrentElement.props[key as keyof TextComponentProps] &&
        value
      ) {
        ;(updateCurrentElement.props[key as keyof TextComponentProps] as
          | string
          | number) = value
      }
    }
  },
  getters: {
    getcurrentElement: (state) =>
      state.components.find(
        (component) => component.id === state.currentElement
      )
  }
})
