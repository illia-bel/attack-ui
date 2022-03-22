<template>
  <a-card
    class  = "col-12"
    :title = "i18n('attackConfigPage.targetsAutoUpdate.title')"
  >
    <template #body>
      <q-form class="row q-gutter-md ddos-targets-auto-update-card">
        <q-toggle
          type    = "boolean"
          color   = "green"
          class   = "col"
          v-model = "formData.isTargetsAutoUpdateEnabled"
          :label  = "i18n('attackConfigPage.targetsAutoUpdate.isEnabledFieldLabel')"
          :hint   = "i18n('attackConfigPage.targetsAutoUpdate.isEnabledFieldHint')"
        />

        <q-input
          class          = "col"
          suffix         = "minutes"
          debounce       = "500"
          mask           = "######"
          v-model.number = "formData.targetsAutoUpdateInterval"
          :label         = "i18n('attackConfigPage.targetsAutoUpdate.intervalFieldLabel')"
          :hint          = "i18n('attackConfigPage.targetsAutoUpdate.intervalFieldHint')"
          :rules         = "[ val => val >= 5 || i18n('attackConfigPage.targetsAutoUpdate.intervalValidationHint') ]"
        />

        <q-input
          type      = "text"
          class     = "col-12"
          debounce  = "500"
          v-model   = "formData.targetsFileUrl"
          :label    = "i18n('attackConfigPage.targetsAutoUpdate.targetsFileUrlLabel')"
          :hint     = "i18n('attackConfigPage.targetsAutoUpdate.targetsFileUrlHint')"
        />
      </q-form>
    </template>
  </a-card>
</template>

<script setup>
import { reactive, onBeforeMount, watch } from 'vue'
import { useStore }                       from 'vuex'
import { useI18n }                        from 'vue-i18n'

import ACard from 'src/components/Cards/ACard'

const { t: i18n } = useI18n()
const store = useStore()

const isTargetsAutoUpdateEnabled = store.getters['ddos/getIsTargetsAutoUpdateEnabled']
const targetsAutoUpdateInterval  = store.getters['ddos/getTargetsAutoUpdateInterval']
const targetsFileUrl             = store.getters['ddos/getTargetsFileUrl']

const formData = reactive({
  isTargetsAutoUpdateEnabled,
  targetsAutoUpdateInterval,
  targetsFileUrl,
})

watch(formData, ({
  isTargetsAutoUpdateEnabled,
  targetsAutoUpdateInterval,
  targetsFileUrl,
}) => {
  store.dispatch('ddos/setTargetsUpdateSettings', {
    isTargetsAutoUpdateEnabled,
    targetsAutoUpdateInterval,
    targetsFileUrl,
  })
})
</script>
