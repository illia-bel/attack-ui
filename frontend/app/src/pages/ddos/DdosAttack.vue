<template>
  <a-ddos-attack-header />
  <a-ddos-results-table />
  <a-donate-notify />
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

import ADdosAttackHeader from 'src/components/Ddos/DdosAttack/ADdosAttackHeader'
import ADdosResultsTable from 'src/components/Ddos/DdosAttack/ADdosResultsTable'
import ADonateNotify from 'src/components/Notify/ADonateNotify'

const store = useStore()

const attackStatus = computed(() => {
  return store.getters['ddos/getBrowserAttackStatus']
})

onMounted(() => {
  if (attackStatus.value) {
    store.dispatch('ddos/initBrowserAttack')
  }
})
</script>
