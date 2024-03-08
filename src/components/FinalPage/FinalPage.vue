<template>
  <div class="final-page">
    <div v-for="item in components" :key="item.id" :id="`component-${item.id}`">
      <component :is="item.name" v-bind="item.props" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {PropType} from 'vue'
defineOptions({ name: 'final-page' })

const props = defineProps({
  components: {
    type: Array as PropType<any[]>,
    required: true
  }
})
</script>
