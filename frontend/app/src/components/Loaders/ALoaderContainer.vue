<template>
  <q-spinner-ios v-if="loading" color="primary" size="2em" />
  <slot v-else />
</template>

<script setup>
const props = defineProps({
  loading: Boolean,
})
</script>
