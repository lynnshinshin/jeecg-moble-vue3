<template>
  <h1>{{ props.title }}</h1>
  <h1>计算属性：{{ title }}</h1>
  <h1>{{ defaultValue }}</h1>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  title: String,
  defaultValue: {
    type: String,
    required: false,
    default: '默认值'
  }
})
const title = computed(() => props.title)
</script>

<style scoped>

</style>