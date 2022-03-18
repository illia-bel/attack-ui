<template>
  <q-btn
    v-if="targetsListLength > 0"
    :label="
      i18n('attackConfigPage.removeAllTargetsBtnLabel')
    "
    color="red"
    flat
    @click="removeAllTargets"
  />
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

const { t: i18n } = useI18n()
const store = useStore()
const removeAllTargets = () => {
  store.commit('ddos/removeAllTargets')
}

const targetsListLength = computed(() => {
  return store.getters['ddos/getTargetsList'].length
})
</script>

<style lang="scss" scouped></style>
