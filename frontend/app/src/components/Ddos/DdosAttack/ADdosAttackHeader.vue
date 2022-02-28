<template>
  <a-card class="col-12" title="DDOS Attack">
    <template #body>
      Status:
      <span
        :class="{
          'text-negative': !attackStatus,
          'text-positive': attackStatus,
        }"
        >{{ attackStatus ? 'Active' : 'Stopped' }}</span
      >
    </template>
    <template #actions>
      <a-ddos-attack-actions />
    </template>
  </a-card>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import ACard from 'src/components/Cards/ACard'
import ADdosAttackActions from 'src/components/Ddos/DdosAttack/ADdosAttackActions'

const store = useStore()

const attackStatus = computed(() => {
  return store.getters['ddos/getBrowserAttackStatus']
})
</script>
