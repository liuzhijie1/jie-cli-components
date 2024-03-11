<template>
  <component :is="tag" @click.prevent="handleClick" :style="styleProps" class="l-text-component">
    {{ text }}
  </component>
</template>

<script setup lang="ts">
import useStylePick from '../../hooks/useStylePick.js'
import useComponentClick from '@/hooks/useComponentClick.js'

defineOptions({ name: 'l-text' })

const props = defineProps({
  ...defaultProps
})

const styleProps = useStylePick(props)
const handleClick = useComponentClick(props)
</script>

<script lang="ts">
import {
  componentsDefaultProps,
  transformToComponentProps,
  isEditingProp
} from '../../defaultProps'
const extraProps = {
  tag: {
    type: String,
    default: 'p'
  },
  ...isEditingProp
}
const defaultProps = transformToComponentProps(componentsDefaultProps['l-text'].props, extraProps)
</script>

<style scoped>
h2.l-text-component,
p.l-text-component {
  margin-bottom: 0;
}
button.l-text-component {
  padding: 5px 10px;
  cursor: pointer;
}
.l-text-component {
  box-sizing: border-box;
  white-space: pre-wrap;
}
</style>
