<template>
  <q-btn
    :label="i18n('nav.donatePage')"
    :to="{
      name: 'DonatePage',
    }"
    color="primary"
    flat
  />
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t: i18n } = useI18n()
</script>
