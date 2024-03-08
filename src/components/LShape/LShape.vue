<template>
  <div
    @click.prevent="handleClick"
    :style="styleProps"
    class="l-shape-component"
    :draggable="false"
  ></div>
</template>

<script setup lang="ts">
import useStylePick from '../../hooks/useStylePick.js'

defineOptions({ name: 'l-shape' })

const props = defineProps({
  ...defaultProps
})

const styleProps = useStylePick(props)
const handleClick = () => {
  if (props.actionType && props.url) {
    window.location.href = props.url
  }
}
</script>

<script>
import { componentsDefaultProps, transformToComponentProps } from '../../defaultProps.js'

const defaultProps = transformToComponentProps(componentsDefaultProps['l-shape'].props)
</script>
