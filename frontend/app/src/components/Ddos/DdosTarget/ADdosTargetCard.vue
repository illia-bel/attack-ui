<template>
  <a-card title="Targets" class="col-12">
    <template #body>
      <a-new-target-form />
      <a-targets-list />
    </template>
    <template #actions>
      <a-ddos-target-actions />
    </template>
  </a-card>
</template>

<script setup>
import ACard from 'src/components/Cards/ACard'
import ADdosTargetActions from 'src/components/Ddos/DdosTarget/ADdosTargetActions'
import ATargetsList from 'src/components/Ddos/DdosTarget/ATargetsList'
import ANewTargetForm from 'src/components/Ddos/DdosTarget/ANewTargetForm'
</script>
