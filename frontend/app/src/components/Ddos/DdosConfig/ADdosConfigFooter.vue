<template>
  <a-card class="col-12">
    <template #actions>
      <a-dods-start-attack-btn :label="i18n('attackConfigPage.startAttackBtnLabel')" />
    </template>
  </a-card>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

import ADodsStartAttackBtn from 'src/components/Ddos/DdosConfig/ADodsStartAttackBtn'
import ACard from 'src/components/Cards/ACard'

const { t: i18n } = useI18n()
</script>
