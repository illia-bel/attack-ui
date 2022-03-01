<template>
  <a-card
    class="col-12"
    :title="i18n('attackPage.pageTitle')"
  >
    <template #body>
      {{ i18n('attackPage.statusTitle') }}:
      <span
        :class="{
          'text-negative': !attackStatus,
          'text-positive': attackStatus,
        }"
        >{{
          attackStatus
            ? i18n('attackPage.attackActiveStatusLabel')
            : i18n('attackPage.attackStoppedStatusLabel')
        }}</span
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
import { useI18n } from 'vue-i18n'

import ACard from 'src/components/Cards/ACard'
import ADdosAttackActions from 'src/components/Ddos/DdosAttack/ADdosAttackActions'

const { t: i18n } = useI18n()
const store = useStore()

const attackStatus = computed(() => {
  return store.getters['ddos/getBrowserAttackStatus']
})
</script>
