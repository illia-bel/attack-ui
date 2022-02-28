<template>
  <a-card title="Connections" class="col-12">
    <template #body>
      <q-form class="row ddos-config-card">
        <q-input
          v-model="formData.reqCount"
          label="Site requests per second"
          type="number"
          class="col-12 col-md-6 q-pr-md"
        />
        <q-input
          v-model="formData.streamsCount"
          label="Streams count"
          type="number"
          class="col-12 col-md-6 q-pl-md"
          disable
          hint="In development"
        />
      </q-form>
    </template>
    <template #actions>
      <q-btn
        @click="resetDdosConfig"
        label="Reset"
        color="red"
        flat
      />
    </template>
  </a-card>
</template>

<script setup>
import { reactive, onBeforeMount, watch } from 'vue'
import { useStore } from 'vuex'

import ACard from 'src/components/Cards/ACard'

const store = useStore()

const formData = reactive({
  reqCount: 0,
  streamsCount: 0,
})

const updateConfig = () => {
  const { user: userConfig, default: defaultConfig } =
    store.getters['ddos/getDdosConfig']

  formData.reqCount =
    userConfig.reqCount || defaultConfig.reqCount

  formData.streamsCount =
    userConfig.streamsCount || defaultConfig.streamsCount
}

onBeforeMount(updateConfig)

watch(formData, ({ reqCount, streamsCount }) => {
  if (!reqCount || !streamsCount) return
  store.commit('ddos/setDdosConfig', {
    reqCount,
    streamsCount,
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
  }
}
</style>
