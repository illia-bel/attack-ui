<template>
  <q-banner class="full-width bg-grey-3 q-mt-md">
    <div class="row justify-between items-center">
      <p class="text-bold q-ma-sm">{{ i18n('promoBanner.message') }}</p>
      <q-btn
        color="dark"
        no-caps
        :label="i18n('promoBanner.actionBtnText')"
        :to="{
          path: '/https://forms.gle/CrZsZ8prxLhhcybx8',
        }"
      />
    </div>
  </q-banner>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t: i18n } = useI18n()
</script>
