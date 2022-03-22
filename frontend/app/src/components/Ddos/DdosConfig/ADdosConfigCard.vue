<template>
  <a-card class="col-12" :title="i18n('attackConfigPage.connectionsTitle')">
    <template #body>
      <q-form class="row q-gutter-md ddos-config-card">
        <q-input
          debounce="500"
          mask="######"
          class="col"
          v-model.number="formData.reqCount"
          :label="i18n('attackConfigPage.reqCountFieldLabel')"
          :hint="i18n('attackConfigPage.reqCountFieldHint')"
          :rules="[val => val > 0 || i18n('attackConfigPage.reqCountValidationHint')]"
        />

        <q-input
          debounce="500"
          mask="######"
          class="col"
          v-model.number="formData.intervalLength"
          :label="i18n('attackConfigPage.intervalTimeFieldLabel')"
          :hint="i18n('attackConfigPage.intervalTimeFieldHint')"
          :rules="[val => val > 0 || i18n('attackConfigPage.intervalTimeValidationHint')]"
        />
      </q-form>
    </template>

    <template #actions>
      <q-btn flat color="red" @click="resetDdosConfig" :label="i18n('attackConfigPage.resetConfigBtnLabel')" />
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
  const { user: userConfig, default: defaultConfig } = store.getters['ddos/getDdosConfig']

  formData.reqCount = userConfig.reqCount || defaultConfig.reqCount

  formData.intervalLength = userConfig.intervalLength || defaultConfig.intervalLength
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
