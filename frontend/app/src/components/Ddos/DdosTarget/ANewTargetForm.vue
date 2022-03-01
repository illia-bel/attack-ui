<template>
  <q-form
    @submit="initSetTarget"
    class="row items-baseline full-width"
  >
    <q-input
      v-model="target"
      :label="i18n('attackConfigPage.addTargetFieldLabel')"
      autofocus
      stack-label
      class="col-8 col-md-4"
    />
    <q-btn
      :label="i18n('attackConfigPage.addTargetBtnLabel')"
      color="primary"
      class="q-ml-lg"
      type="submit"
    />
  </q-form>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

const { t: i18n } = useI18n()
const store = useStore()

const target = ref()

const initSetTarget = () => {
  store.commit('ddos/setTarget', {
    target: target.value,
    callback() {
      target.value = ''
    },
  })
}
</script>

<style lang="scss" scouped></style>
