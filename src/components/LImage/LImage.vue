<template>
  <img
    :src="imageSrc"
    :style="styleProps"
    @click.prevent="handleClick"
    class="l-image-component"
    :draggable="false"
  />
</template>

<script setup lang="ts">
import useStylePick from '../../hooks/useStylePick.js'
import useComponentClick from '@/hooks/useComponentClick.js'
import { componentsDefaultProps, transformToComponentProps, isEditingProp } from '../../defaultProps.js'
defineOptions({ name: 'l-image' })

const props = defineProps(transformToComponentProps(componentsDefaultProps['l-image'].props, isEditingProp))

const styleProps = useStylePick(props)
const handleClick = useComponentClick(props)
</script>
<style>
.l-image-component {
  max-width: 100%;
}
</style>
