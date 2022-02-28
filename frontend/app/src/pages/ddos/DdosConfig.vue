<template>
  <a-card class="col-12" title="DDOS Configuration">
    <template #body>
      <a-new-target-form />
      <a-targets-list
        :targets-list="targetsList"
        @remove-target="removeTarget"
      />
    </template>
    <template #actions>
      <q-btn
        label="start"
        :to="{ name: 'DdosAttack' }"
        color="primary"
      />
      <q-btn
        label="Remove All Targets"
        color="red"
        flat
        class="q-ml-sm"
        @click="removeAllTargets"
      />
    </template>
  </a-card>
</template>

<script setup>
import { onBeforeMount } from 'vue'

import {
  targetsList,
  removeTarget,
  removeAllTargets,
  fetchTargets,
} from 'src/modules/ddos/ddosConfig'

import ATargetsList from 'src/components/Ddos/ATargetsList'
import ANewTargetForm from 'src/components/Ddos/ANewTargetForm'
import ACard from 'src/components/Cards/ACard'

onBeforeMount(() => {
  if (targetsList.length > 0) return
  fetchTargets()
})
</script>

<style lang="scss" scouped></style>
