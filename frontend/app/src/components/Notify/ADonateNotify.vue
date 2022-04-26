<template>
  <q-dialog v-model="dialogModel">
    <q-card>
      <q-card-section>
        <div class="text-h6">🔥 {{ i18n('donateDialog.title') }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ i18n('donateDialog.message') }}
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          @click="refuseToDonate"
          flat
          :label="i18n('donateDialog.closeBtnText')"
          color="grey"
          v-close-popup
          no-caps
        />
        <q-btn
          :to="{ name: 'DonatePage' }"
          flat
          :label="'🚀 ' + i18n('donateDialog.donateBtnText')"
          color="primary"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t: i18n } = useI18n()
const route = useRoute()
const dialogModel = ref(false)

const refuseToDonate = () => {
  setTimeout(() => {
    if (route.name === 'DonatePage') return
    dialogModel.value = true
  }, 60 * 1000)
}

setTimeout(() => {
  if (route.name === 'DonatePage') return
  dialogModel.value = true
}, 3000)
</script>

<style lang="scss" scoped></style>
