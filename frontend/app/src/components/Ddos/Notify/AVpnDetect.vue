<template>
  <q-banner
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
const updatedAt = ref()
const showWarning = ref(false)

/**
 * Update info about ip address
 */
const updateInfo = async () => {
  loadingData.value = true
  const resp = await getIpAddress()

  ipInfo.splice(0, ipInfo.length)

  showWarning.value =
    resp.geoplugin_countryCode !== 'RU' &&
    resp.geoplugin_countryCode !== 'BY'
  ipInfo.push(
    ...[
      {
        label: 'Your IP',
        info: resp.geoplugin_request,
      },
      {
        label: 'IP Country',
        info: `${resp.geoplugin_countryName}, ${resp.geoplugin_regionName}`,
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
