<template>
  <a-card class="col-12" title="DDOS Configuration" />

  <a-ddos-target-card />
  <a-ddos-config-card />

  <a-ddos-config-footer />
</template>

<script setup>
import ACard from 'src/components/Cards/ACard'
import ADdosTargetCard from 'src/components/Ddos/DdosTarget/ADdosTargetCard'
import ADdosConfigCard from 'src/components/Ddos/DdosConfig/ADdosConfigCard'
import ADdosConfigFooter from 'src/components/Ddos/DdosConfig/ADdosConfigFooter'
</script>
