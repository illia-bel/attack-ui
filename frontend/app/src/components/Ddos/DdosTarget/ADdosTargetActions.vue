<template>
  <q-btn
    :label="
      i18n('attackConfigPage.removeAllTargetsBtnLabel')
    "
    color="red"
    flat
    @click="removeAllTargets"
  />
</template>

<script setup>
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

const { t: i18n } = useI18n()
const store = useStore()
const removeAllTargets = () => {
  store.commit('ddos/removeAllTargets')
}
</script>

<style lang="scss" scouped></style>
