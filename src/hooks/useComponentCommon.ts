import { computed, ref } from 'vue'
import { pick } from 'lodash-es'

export const useComponentCommon = <T extends { [key: string]: unknown }>(
  props: T,
  picks: string[]
) => {
  const styleProps = computed(() => pick(props, picks))

  const handleClick = () => {
    if (props.actionType === 'url' && props.url) {
      window.location.href = props.url as string
    }
  }
  return {
    styleProps,
    handleClick
  }
}

export const useTestHooks = () => {
  const a = ref(1)

  const handleClick = () => {
    a.value++
  }
  return {
    a,
    handleClick
  }
}
