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
      Use VPN with Russian or Belarusian IP for more
      effective attack
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
          label="Reload"
          flat
          :loading="loadingData"
        />
        <div class="text-grey">
          Last updated at: {{ updatedAt }}
        </div>
      </div>
    </template>
  </q-banner>
</template>

<script setup>
import { reactive, ref, onBeforeMount } from 'vue'
import { getIpAddress } from 'src/modules/user'

const ipInfo = reactive([])
const loadingData = ref(false)
const dataIsLoaded = ref(false)
const updatedAt = ref()
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
        label: 'Your IP',
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
