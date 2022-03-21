<template>
  <a-card
    class  = "col-12"
    :title = "i18n('attackConfigPage.targetsAutoUpdate.title')"
  >
    <template #body>
      <q-form class="row ddos-targets-auto-update-card">
        <q-toggle
          type    = "boolean"
          class   = "col-6 q-pr-md"
          v-model = "formData.isTargetsAutoUpdateEnabled"
          :label  = "i18n('attackConfigPage.targetsAutoUpdate.isEnabledFieldLabel')"
          :hint   = "i18n('attackConfigPage.targetsAutoUpdate.isEnabledFieldHint')"
        />
        <q-input
          type    = "number"
          class   = "col-6 q-pl-md"
          v-model.number = "formData.targetsAutoUpdateInterval"
          :label  = "i18n('attackConfigPage.targetsAutoUpdate.intervalFieldLabel')"
          :hint   = "i18n('attackConfigPage.targetsAutoUpdate.intervalFieldHint')"
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
const store       = useStore()

const isTargetsAutoUpdateEnabled = store.getters['ddos/getIsTargetsAutoUpdateEnabled']
const targetsAutoUpdateInterval = store.getters['ddos/getTargetsAutoUpdateInterval']

const formData = reactive({
  isTargetsAutoUpdateEnabled,
  targetsAutoUpdateInterval,
})

// const updateConfig = () => {
//   const { user: userConfig } = store.getters['ddos/getDdosConfig']

//   formData.isTargetsAutoUpdateEnabled =
//     userConfig.isTargetsAutoUpdateEnabled ?? defaultConfig.isTargetsAutoUpdateEnabled

//   formData.targetsAutoUpdateInterval =
//     userConfig.targetsAutoUpdateInterval || defaultConfig.targetsAutoUpdateInterval
// }

// onBeforeMount(updateConfig)

watch(formData, ({ isTargetsAutoUpdateEnabled, targetsAutoUpdateInterval }) => {
  store.dispatch('ddos/setTargetsUpdateSettings', {
    isTargetsAutoUpdateEnabled,
    targetsAutoUpdateInterval,
  })
})
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
