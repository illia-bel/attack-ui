<template>
  <a-card title="Results" class="col-12">
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
import ACard from 'src/components/Cards/ACard'

const store = useStore()

const resultsList = computed(() => {
  return store.getters['ddos/getBrowserAttackResults']
})

const columns = [
  {
    name: 'target',
    required: true,
    label: 'Target',
    align: 'left',
    field: 'target',
  },
  {
    name: 'success',
    required: true,
    label: 'Success requests',
    align: 'left',
    field: 'success',
  },
  {
    name: 'errors',
    required: true,
    label: 'Errors count',
    align: 'left',
    field: 'error',
  },
]
</script>
