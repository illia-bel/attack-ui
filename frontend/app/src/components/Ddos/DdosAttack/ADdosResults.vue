<template>
  <a-card
    :title="i18n('attackPage.resultsCardTitle')"
    class="col-12"
  >
    <template #body>
      <q-table
        :rows="resultsList"
        :columns="columns"
        flat
        :pagination="{ rowsPerPage: 30 }"
      />
    </template>
  </a-card>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import ACard from 'src/components/Cards/ACard'

const { t: i18n } = useI18n()
const store = useStore()

const resultsList = computed(() => {
  return store.getters['ddos/getBrowserAttackResults']
})

const columns = [
  {
    name: 'target',
    required: true,
    label: i18n('attackPage.table.target'),
    align: 'left',
    field: 'target',
  },
  {
    name: 'success',
    required: true,
    label: i18n('attackPage.table.success'),
    align: 'left',
    field: 'success',
  },
  {
    name: 'errors',
    required: true,
    label: i18n('attackPage.table.errors'),
    align: 'left',
    field: 'error',
  },
]
</script>
