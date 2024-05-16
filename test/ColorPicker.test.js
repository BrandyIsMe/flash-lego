import { beforeAll, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ColorPicker from '../src/components/ColorPicker.vue'
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
let wrapper //: VueWrapper<unknown>

describe('UseProfile component', () => {
  beforeAll(() => {
    wrapper = mount(ColorPicker, {
      props: {
        value: '#ffffff'
      }
    })
  })

  it('should render the correct interface', () => {
    // <div><input /></div>
    // <ul class="picked-color-list">
    //     <li class="item-0" or class="transparent-back">
    //         <div></div>
    //     </li>
    // </ul>
    // 测试左侧为input ，类型和值是否正确
    expect(wrapper.find('input').exists()).toBeTruthy()
    const input = wrapper.get('input').element
    expect(input.type).toBe('color')
    expect(input.value).toBe('#ffffff')
    // 测试右侧是否有颜色的列表
    expect(wrapper.findAll('.picked-color-list li').length).toBe(
      defaultColors.length
    )
    // 检查一个元素的 css backgroundColor属性是否相等对应的颜色
    const firstItem = wrapper.get('li:first-child div').element
    expect(firstItem.style.backgroundColor).toBe(defaultColors[0])
    // 测试最后一个元素是否有特色的类名
    const lasttItem = wrapper.get('li:last-child div').element
    expect(lasttItem.classList.contains('transparent-back')).toBeTruthy()
  })

  it('should render the correct when change input', async () => {
    const blackHex = '#000000'
    const input = wrapper.get('input')
    await input.setValue(blackHex)
    expect(wrapper.emitted()).toHaveProperty('change')
    const events = wrapper.emitted('change')
    expect(events[0]).toEqual([blackHex])
  })

  it('should send the correct event when clicking the color list', async () => {
    // 测试点击右侧颜色列表以后，是否发送对应的值
    const firstItem = wrapper.get('li:first-child div')
    firstItem.trigger('click')
    const events = wrapper.emitted('change')
    expect(events[2][0]).toEqual(defaultColors[0])
  })
})
