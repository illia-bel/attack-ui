<template>
  <div class="row">
    <div class="q-pa-sm bg-green-1 q-mr-md q-mt-md">
      <b class="text-positive">{{ i18n('attackPage.totalResults.success') }}:</b>
      {{ commonResults.success }}
    </div>
    <div class="q-pa-sm bg-red-1 q-mt-md">
      <b class="text-negative">{{ i18n('attackPage.totalResults.error') }}:</b>
      {{ commonResults.error }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

const store = useStore()
const { t: i18n } = useI18n()

const commonResults = computed(() => {
  return store.getters['ddos/getCommonResultsBrowserAttack']
})
</script>

<style lang="scss" scouped></style>
