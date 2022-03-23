<template>
  <q-banner v-if="showWarning" class="bg-amber-1 text-amber-14">
    {{ i18n('denialOfResponsibilityWarning.message') }}

    <template v-slot:action>
      <q-btn
        @click="hideNotify"
        flat
        color="amber-14"
        :label="i18n('denialOfResponsibilityWarning.okBtnLabel')"
        no-caps
      />
    </template>
  </q-banner>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t: i18n } = useI18n()

let storageWarningData = localStorage.getItem('denialOfResponsibilityWarningShow')

storageWarningData = storageWarningData ? !!Number(storageWarningData) : true

const showWarning = ref(storageWarningData !== false)

const hideNotify = () => {
  localStorage.setItem('denialOfResponsibilityWarningShow', 0)

  showWarning.value = false
}
</script>

<style lang="scss" scoped></style>
