<template>
  <!-- Targets List Chips -->
  <div class="row q-gutter-xs q-mt-lg">
    <div
      v-for="(target, key) in targetsList"
      :key="key + target"
      class="q-gutter-xs"
    >
      <q-chip
        removable
        outline
        color="primary"
        @remove="this.$emit('removeTarget', key)"
      >
        <q-tooltip> Click to open in a new tab </q-tooltip>
        <a :href="target" target="_blank">{{ target }}</a>
      </q-chip>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  targetsList: {
    type: Array,
    default: () => [],
  },
})
</script>
