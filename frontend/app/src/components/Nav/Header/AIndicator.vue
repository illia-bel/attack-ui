<template>
  <q-badge
    rounded
    class="bg-deep-orange"
    :class="isAttackStarted ? 'status-badge ' : 'hidden'"
  >
    <q-icon name="bolt" size="14px" />
  </q-badge>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex';

const store = useStore()
const isAttackStarted = computed(() => store.getters['ddos/getBrowserAttackStatus'])
</script>
