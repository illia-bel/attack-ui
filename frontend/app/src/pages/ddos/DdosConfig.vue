<template>
  <a-card class="col-12" title="DDOS Configuration" />

  <a-ddos-target-card />
  <a-card class="col-12">
    <template #actions>
      <q-btn
        label="start attack"
        :to="{ name: 'DdosAttack' }"
        color="primary"
      />
    </template>
  </a-card>
</template>

<script setup>
import ACard from 'src/components/Cards/ACard'
import ADdosTargetCard from 'src/components/Ddos/DdosTarget/ADdosTargetCard'
</script>
