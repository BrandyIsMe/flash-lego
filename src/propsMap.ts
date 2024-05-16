import { TextComponentProps } from './defaultProps'
export interface PropToFrom {
  text: string
  component: string
  subComponent?: string
  value?: string | number
  options?: { text: string; value: unknown }[]
  extraProps?: { [key: string]: unknown }
  initalTransform?: (v: string) => number
  afterTransform?: (v: unknown) => unknown
  valueProp?: string
  enventName?: string
  events?: { [key: string]: (e: unknown) => void }
}

export type PropsToForms = {
  [P in keyof TextComponentProps]?: PropToFrom
}

export const mapPropsToForms: PropsToForms = {
  text: {
    text: '文本',
    component: 'a-input',
    afterTransform: (v: unknown) => {
      const newV = v as Event
      if (newV) {
        return (newV.target as HTMLInputElement).value
      }
    }
  },
  fontSize: {
    text: '字体',
    component: 'a-input-number',
    initalTransform: (v: string) => {
      if (v) {
        v = v.replace(/px/g, '')
        return parseFloat(v)
      }
      return 0
    },
    afterTransform: (v: unknown) => {
      return (v += 'px')
    }
  },
  lineHeight: {
    text: '行高',
    component: 'a-slider',
    extraProps: {
      min: 0,
      max: 3,
      step: 0.1
    },
    initalTransform: (v: string) => parseFloat(v)
  },
  textAlign: {
    text: '对齐',
    component: 'a-radio-group',
    subComponent: 'a-radio-button',
    afterTransform: (v: unknown) => {
      const newV = v as Event
      if (newV) {
        return (newV.target as HTMLInputElement).value
      }
    },
    options: [
      {
        value: 'left',
        text: '左'
      },
      {
        value: 'center',
        text: '中'
      },
      {
        value: 'right',
        text: '右'
      }
    ]
  },
  color: {
    text: '字体颜色',
    component: 'ColorPicker'
  }
}
