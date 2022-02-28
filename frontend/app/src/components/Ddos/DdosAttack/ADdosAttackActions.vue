<template>
  <div class="row column items-end">
    <q-btn
      v-if="attackStatus"
      @click="destroyAttack"
      label="Stop"
      color="negative"
    />

    <q-btn
      v-else
      @click="initAttack"
      label="Start"
      color="primary"
    />

    <span class="text-grey q-mt-xs">
      Stop can take up to 1 minute
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import { useStore } from 'vuex'
const store = useStore()

const attackStatus = computed(() => {
  return store.getters['ddos/getBrowserAttackStatus']
})

const destroyAttack = () => {
  store.dispatch('ddos/destroyBrowserAttack')
}

const initAttack = () => {
  store.dispatch('ddos/initBrowserAttack')
}
</script>

<style lang="scss" scouped></style>
