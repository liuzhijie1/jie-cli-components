<template>
  <div class="final-page" :style="page.props">
    <div v-for="item in components" :key="item.id">
      <component :is="item.name" v-bind="item.props" />
    </div>
  </div>
</template>

<script setup>
defineOptions({ name: 'final-page' })

const props = defineProps({
  page: {
    type: Object,
    required: true
  },
  components: {
    type: Array,
    required: true
  }
})
</script>

<style>
.final-page {
  width: 100%;
  height: 100%;
  background-size: cover;
  width: 322px;
  min-height: 600px;
  position: relative;
  margin: 0 auto;
}
</style>
