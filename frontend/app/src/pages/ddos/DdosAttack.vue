<template>
  <a-ddos-attack-header />
  <a-ddos-results />
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

import ADdosAttackHeader from 'src/components/Ddos/DdosAttack/ADdosAttackHeader'
import ADdosResults from 'src/components/Ddos/DdosAttack/ADdosResults'

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
