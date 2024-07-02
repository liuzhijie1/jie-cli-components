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
import useComponentClick from '@/hooks/useComponentClick.js'

defineOptions({ name: 'l-shape' })

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
} from '../../defaultProps.js'

const defaultProps = transformToComponentProps(
  componentsDefaultProps['l-shape'].props,
  isEditingProp
)
</script>
