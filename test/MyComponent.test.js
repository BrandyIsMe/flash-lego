import { test } from 'vitest'
import MyComponent from '../src/components/MyComponent.vue'
import { render } from '@testing-library/vue'

test('it should work', () => {
  const { getByText } = render(MyComponent, {
    props: {
      test: 'hello world'
    }
  })

  // 断言输出
  getByText('hello world')
})
