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
      <a-data-text-view
        :data-list="emailsList"
        source-link="https://raw.githubusercontent.com/NIRVANA101/Russian-GBSB/main/CONTENTS/Emails/emails.json"
      />
    </template>
  </a-card>
</template>

<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { getRussiansEmailsList } from 'src/modules/api'

import ACard from 'src/components/Cards/ACard'
import ADataTextView from 'src/components/RussianData/ADataTextView'

const { t: i18n } = useI18n()
const emailsList = reactive([])

;(async () => {
  emailsList.push(...(await getRussiansEmailsList()))
})()
</script>

<style lang="scss" scouped></style>
