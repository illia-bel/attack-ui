<template>
  <a-card :title="i18n('attackPage.resultsCardTitle')" class="col-12">
    <template #body>
      <a-ddos-total-results />
      <div class="q-mt-md">
        <q-btn
          @click="removeSelectedTargets"
          :label="i18n('attackPage.deleteSelectedTargets')"
          icon="delete"
          flat
          color="grey"
          no-caps
          :disable="stateBulkRemoveTargetsBtn"
        />
      </div>
      <q-table :rows="resultsList" :columns="columns" flat :pagination="{ rowsPerPage: 100 }" class="q-mt-sm">
        <template #header-cell-select>
          <q-th class="text-left">
            <q-checkbox v-model="toggleAllTargets" />
          </q-th>
        </template>
        <template #body-cell-select="{ row: { target } }">
          <q-td>
            <q-checkbox v-model="selectedTargetsModel[target]" />
          </q-td>
        </template>
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
import { computed, reactive, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import ACard from 'src/components/Cards/ACard'
import ADdosTotalResults from 'src/components/Ddos/DdosAttack/ADdosTotalResults'

const { t: i18n } = useI18n()
const store = useStore()

// Модель выбранных строк таблицы
const seletedTargetsIsInit = ref(false)

const resultsList = computed(() => {
  const results = store.getters['ddos/getBrowserAttackResults']

  if (!seletedTargetsIsInit.value) {
    // Ставим дефолтное значение для selectedTargetsModel
    seletedTargetsIsInit.value = true
  }

  results.sort((a, b) => b.success - a.success)

  return results
})

const selectedTargetsModel = reactive({})
for (const { target } of resultsList.value) {
  selectedTargetsModel[target] = false
}

const columns = [
  {
    name: 'select',
    align: 'left',
    field: 'select',
  },
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

// Переключить все цели
const toggleAllTargets = ref(false)
watch(toggleAllTargets, state => {
  Object.entries(selectedTargetsModel).forEach(([target]) => {
    selectedTargetsModel[target] = state
  })
})

const selectedTargets = computed(() => {
  const result = []
  Object.entries(selectedTargetsModel).forEach(([target, selected]) => {
    if (selected) result.push(target)
  })

  return result
})

const stateBulkRemoveTargetsBtn = computed(() => {
  return selectedTargets.value.length === 0
})

const removeSelectedTargets = () => {
  selectedTargets.value.forEach(target => {
    store.commit('ddos/removeTarget', target)
  })
}
</script>
