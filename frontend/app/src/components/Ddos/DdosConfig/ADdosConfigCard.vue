<template>
  <a-card
    :title="i18n('attackConfigPage.connectionsTitle')"
    class="col-12"
  >
    <template #body>
      <q-form class="row ddos-config-card">
        <q-input
          v-model.number="formData.reqCount"
          :label="
            i18n('attackConfigPage.reqCountFieldLabel')
          "
          type="number"
          class="col-12 col-md-6 q-pr-md"
          :hint="i18n('attackConfigPage.reqCountFieldHint')"
        />
        <q-input
          v-model.number="formData.intervalLength"
          :label="
            i18n('attackConfigPage.intervalTimeFieldLabel')
          "
          type="number"
          class="col-12 col-md-6 q-pl-md"
          :hint="
            i18n('attackConfigPage.intervalTimeFieldHint')
          "
        />
      </q-form>
    </template>
    <template #actions>
      <q-btn
        @click="resetDdosConfig"
        :label="
          i18n('attackConfigPage.resetConfigBtnLabel')
        "
        color="red"
        flat
      />
    </template>
  </a-card>
</template>

<script setup>
import { reactive, onBeforeMount, watch } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

import ACard from 'src/components/Cards/ACard'

const { t: i18n } = useI18n()
const store = useStore()

const formData = reactive({
  reqCount: 0,
  intervalLength: 0,
})

const updateConfig = () => {
  const { user: userConfig, default: defaultConfig } =
    store.getters['ddos/getDdosConfig']

  formData.reqCount =
    userConfig.reqCount || defaultConfig.reqCount

  formData.intervalLength =
    userConfig.intervalLength ||
    defaultConfig.intervalLength
}

onBeforeMount(updateConfig)

watch(formData, ({ reqCount, intervalLength }) => {
  if (!reqCount || !intervalLength) return
  store.commit('ddos/setDdosConfig', {
    reqCount,
    intervalLength,
  })
})

const resetDdosConfig = () => {
  store.commit('ddos/resetDdosConfig')
  updateConfig()
}
</script>

<style lang="scss">
@media screen and (max-width: 920px) {
  .ddos-config-card .q-field {
    padding: 0;
    &:not(:first-child) {
      margin-top: 16px;
    }
  }
}
</style>
