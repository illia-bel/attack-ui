<template>
  <q-form
    @submit="initSetTarget"
    class="new-taget-form row items-center full-width"
  >
    <q-input
      v-model="target"
      :label="i18n('attackConfigPage.addTargetFieldLabel')"
      autofocus
      stack-label
      class="col-xs-12 col-md-4"
    />
    <q-btn
      :label="i18n('attackConfigPage.addTargetBtnLabel')"
      class="q-ml-lg add-btn bg-blue-1 text-primary"
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

<style lang="scss" scouped>
@media screen and (max-width: 920px) {
  .add-btn {
    margin: 16px 0 0 0;
  }
}
</style>
