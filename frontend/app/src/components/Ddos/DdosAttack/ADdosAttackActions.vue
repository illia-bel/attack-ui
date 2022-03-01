<template>
  <div class="row column items-end">
    <q-btn
      v-if="attackStatus"
      @click="destroyAttack"
      :label="i18n('attackPage.stopBtnLabel')"
      color="negative"
    />

    <q-btn
      v-else
      @click="initAttack"
      :label="i18n('attackPage.startBtnLabel')"
      color="primary"
    />
    <span class="text-grey q-mt-xs">
      {{ i18n('attackPage.actionsHint') }}
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

const { t: i18n } = useI18n()
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
