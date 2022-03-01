<template>
  <q-banner
    v-if="dataIsLoaded"
    rounded
    :class="{
      'bg-red-1': showWarning,
      'bg-grey-3': !showWarning,
    }"
  >
    <p v-if="showWarning" class="text-red text-bold">
      {{ i18n('ipNotify.title') }}
    </p>
    <ul class="ul-reset">
      <li v-for="({ label, info }, key) in ipInfo">
        <b>{{ label }}:</b> {{ info }}
      </li>
    </ul>

    <template v-slot:action>
      <div class="flex column items-end">
        <q-btn
          @click="updateInfo"
          :label="i18n('ipNotify.reloadBtnLabel')"
          flat
          :loading="loadingData"
        />
        <div v-if="updatedAt" class="text-grey">
          {{ i18n('ipNotify.updatedAtLabel') }}:
          {{ updatedAt }}
        </div>
      </div>
    </template>
  </q-banner>
</template>

<script setup>
import { reactive, ref, onBeforeMount } from 'vue'
import { useI18n } from 'vue-i18n'

import { getIpAddress } from 'src/modules/user'

const { t: i18n } = useI18n()

const ipInfo = reactive([])
const loadingData = ref(false)
const updatedAt = ref()

// for sripner animation
const dataIsLoaded = ref(false)

// If there is an error with the request - hide notify
const showWarning = ref(false)

/**
 * Update info about ip address
 */
const updateInfo = async () => {
  loadingData.value = true
  const resp = await getIpAddress()

  ipInfo.splice(0, ipInfo.length)

  if (!resp.countryCode) {
    dataIsLoaded.value = false
    loadingData.value = false
    return
  } else {
    dataIsLoaded.value = true
  }

  showWarning.value =
    resp.countryCode !== 'RU' && resp.countryCode !== 'BY'
  ipInfo.push(
    ...[
      {
        label: i18n('ipNotify.ipLabel'),
        info: resp.ipAddress,
      },
      {
        label: 'IP Country',
        info: `${resp.continentName} ${resp.countryName}, ${resp.city}`,
      },
    ],
  )

  updatedAt.value = new Date().toLocaleTimeString()

  loadingData.value = false
}

onBeforeMount(() => {
  updateInfo()
})
</script>

<style lang="scss" scouped></style>
