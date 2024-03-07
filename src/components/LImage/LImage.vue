<template>
  <img
    :src="imageSrc"
    :style="styleProps"
    @click.prevent="handleClick"
    class="l-image-component"
    :draggable="false"
  />
</template>

<script setup>
import useStylePick from '../../hooks/useStylePick.js'
import { componentsDefaultProps, transformToComponentProps } from '../../defaultProps.js'
defineOptions({ name: 'l-image' })

const props = defineProps(transformToComponentProps(componentsDefaultProps['l-image'].props))

const styleProps = useStylePick(props)
const handleClick = () => {
  if (props.actionType && props.url) {
    window.location.href = props.url
  }
}
</script>
<style scoped>
.l-image-component {
  max-width: 100%;
}
</style>