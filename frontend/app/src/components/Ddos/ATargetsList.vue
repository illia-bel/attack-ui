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
        @remove="removeTarget(key)"
      >
        <q-tooltip> Click to open in a new tab </q-tooltip>
        <a :href="target" target="_blank">{{ target }}</a>
      </q-chip>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

/**
 * Remove one target item
 * @param {Number} index index target item in array
 */
const removeTarget = index => {
  store.commit('ddos/removeTarget', index)
}

const targetsList = computed(() => {
  return store.getters['ddos/getTargetsList']
})
</script>
