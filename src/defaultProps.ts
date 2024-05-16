import { mapValues, without } from 'lodash-es'
export const commonDefaultProps = {
  actionType: '',
  url: '',
  //size
  height: '',
  width: '100%',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  //boder type
  borderStyle: 'none',
  bigintColor: '#000000',
  bigintWidth: '0',
  borderRadius: '0',
  boxShadow: '0 0 0 #000000',
  opacity: 1,
  //位置
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0'
}

export const textDefaultProps = {
  text: '正文内容',
  fontSize: '20px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textAlign: 'left',
  lineHeight: '1',
  color: '#000000',
  textDecoration: 'none',
  backgroundColor: '',
  ...commonDefaultProps
}

export const textStylePropsNames = without(
  Object.keys(textDefaultProps),
  'text',
  'actionType',
  'url'
)

export type TextComponentProps = Partial<typeof textDefaultProps>

export const transformComponentProps = <T extends { [key: string]: unknown }>(
  props: T
) => {
  return mapValues(props, (item) => {
    return {
      type: [String, Number],
      default: item
    }
  })
}
