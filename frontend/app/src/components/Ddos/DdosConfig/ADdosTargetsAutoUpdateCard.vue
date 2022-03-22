<template>
  <a-card class="col-12" :title="i18n('attackConfigPage.targetsAutoUpdate.title')">
    <template #body>
      <q-form class="row q-gutter-md ddos-targets-auto-update-card">
        <q-toggle
          type="boolean"
          color="primary"
          class="col"
          v-model="formData.isTargetsAutoUpdateEnabled"
          :label="i18n('attackConfigPage.targetsAutoUpdate.isEnabledFieldLabel')"
          :hint="i18n('attackConfigPage.targetsAutoUpdate.isEnabledFieldHint')"
        />

        <q-input
          class="col"
          suffix="minutes"
          debounce="500"
          mask="######"
          v-model.number="formData.targetsAutoUpdateInterval"
          :label="i18n('attackConfigPage.targetsAutoUpdate.intervalFieldLabel')"
          :hint="i18n('attackConfigPage.targetsAutoUpdate.intervalFieldHint')"
          :rules="[val => val >= 5 || i18n('attackConfigPage.targetsAutoUpdate.intervalValidationHint')]"
        />

        <q-input
          type="text"
          class="col-12 q-pr-md"
          debounce="500"
          v-model="targetsFileUrlModel"
          :label="i18n('attackConfigPage.targetsAutoUpdate.targetsFileUrlLabel')"
          :hint="i18n('attackConfigPage.targetsAutoUpdate.targetsFileUrlHint')"
        />
      </q-form>
    </template>

    <template #actions>
      <q-btn
        flat
        color="red"
        @click="fetchTargets"
        :label="i18n('attackConfigPage.targetsAutoUpdate.forceUpdateBtnLabel')"
      />
    </template>
  </a-card>
</template>

<script setup>
import { reactive, watch, computed } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { validateTargetsSourceFile } from 'src/modules/ddos/ddosConfig'
import { notifyError } from 'src/modules/notify'

import ACard from 'src/components/Cards/ACard'

const { t: i18n } = useI18n()
const store = useStore()

const isTargetsAutoUpdateEnabled = store.getters['ddos/getIsTargetsAutoUpdateEnabled']
const targetsAutoUpdateInterval = store.getters['ddos/getTargetsAutoUpdateInterval']
const targetsFileUrl = store.getters['ddos/getTargetsFileUrl']

const formData = reactive({
  isTargetsAutoUpdateEnabled,
  targetsAutoUpdateInterval,
  targetsFileUrl,
})

const targetsFileUrlModel = computed({
  get() {
    const link = formData.targetsFileUrl
    return link === 'targets.json' ? 'https://war.apexi.tech/' + link : link
  },
  async set(link) {
    if (!(await validateTargetsSourceFile(link))) {
      notifyError('Error')
      return
    }

    formData.targetsFileUrl = link
  },
})

watch(formData, ({ isTargetsAutoUpdateEnabled, targetsAutoUpdateInterval, targetsFileUrl }) => {
  store.dispatch('ddos/setTargetsUpdateSettings', {
    isTargetsAutoUpdateEnabled,
    targetsAutoUpdateInterval,
    targetsFileUrl,
  })
})

const fetchTargets = () => {
  store.dispatch('ddos/setDefaultTargets')
}
</script>
