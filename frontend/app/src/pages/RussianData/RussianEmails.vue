<template>
  <a-card class="col-12 q-mt-md" :title="i18n('russianEmailsPage.pageTitle')">
    <template #body>
      {{ i18n('russianEmailsPage.dataSourceLabel') }}:
      <a href="https://github.com/NIRVANA101/Russian-GBSB" target="_blank"
        >https://github.com/NIRVANA101/Russian-GBSB</a
      >
    </template>
  </a-card>

  <a-card class="col-12 q-mt-md">
    <template #body>
      <a-loader-container :loading="isDataLoading">
        <a-data-text-view
          :data-list="emailsList"
          source-link="https://raw.githubusercontent.com/NIRVANA101/Russian-GBSB/main/CONTENTS/Emails/emails.json"
        />
      </a-loader-container>
    </template>
  </a-card>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { getRussiansEmailsList } from 'src/modules/api'

import ACard from 'src/components/Cards/ACard'
import ADataTextView from 'src/components/RussianData/ADataTextView'
import ALoaderContainer from 'src/components/Loaders/ALoaderContainer'

const { t: i18n } = useI18n()
const emailsList = reactive([])
const isDataLoading = ref(false)

;(async () => {
  isDataLoading.value = true
  emailsList.push(...(await getRussiansEmailsList()))
  isDataLoading.value = false
})()
</script>

<style lang="scss" scoped></style>
