<template>
  <a-card
    :title="i18n('attackPage.resultsCardTitle')"
    class="col-12"
  >
    <template #body>
      <a-ddos-total-results />
      <q-table
        :rows="resultsList"
        :columns="columns"
        flat
        :pagination="{ rowsPerPage: 100 }"
        class="q-mt-sm"
      >
        <template #body-cell-ping="{ row: { target } }">
          <q-td>
            <q-btn
              icon="open_in_new"
              dense
              no-caps
              :to="`/https://check-host.net/check-ping?host=${target}`"
              color="grey"
              flat
            />
          </q-td>
        </template>
      </q-table>
    </template>
  </a-card>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import ACard from 'src/components/Cards/ACard'
import ADdosTotalResults from 'src/components/Ddos/DdosAttack/ADdosTotalResults'

const { t: i18n } = useI18n()
const store = useStore()

const resultsList = computed(() => {
  const results =
    store.getters['ddos/getBrowserAttackResults']
  results.sort((a, b) => b.success - a.success)
  return results
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
    sortable: true,
  },
  {
    name: 'errors',
    required: true,
    label: i18n('attackPage.table.errors'),
    align: 'left',
    field: 'error',
    sortable: true,
  },
  {
    name: 'ping',
    required: false,
    label: i18n('attackPage.table.checkAvailability'),
    align: 'left',
    field: 'ping',
  },
]
</script>
