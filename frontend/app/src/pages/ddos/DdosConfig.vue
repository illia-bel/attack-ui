<template>
  <a-card
    class="col-12"
    :title="i18n('attackConfigPage.pageTitle')"
  >
    <template #body>
      <a-vpn-detect />
    </template>
    <template #actions>
      <a-dods-start-attack-btn
        :label="
          i18n('attackConfigPage.startAttackBtnLabel')
        "
      />
    </template>
  </a-card>

  <a-ddos-target-card />
  <a-ddos-config-card />
  <a-ddos-targets-auto-update-card />

  <a-ddos-config-footer />
</template>

<script setup>
import { useI18n } from 'vue-i18n'

import ACard from 'src/components/Cards/ACard'
import ADdosTargetCard from 'src/components/Ddos/DdosTarget/ADdosTargetCard'
import ADdosConfigCard from 'src/components/Ddos/DdosConfig/ADdosConfigCard'
import ADdosTargetsAutoUpdateCard from 'src/components/Ddos/DdosConfig/ADdosTargetsAutoUpdateCard'
import ADdosConfigFooter from 'src/components/Ddos/DdosConfig/ADdosConfigFooter'
import AVpnDetect from 'src/components/Ddos/Notify/AVpnDetect'
import ADodsStartAttackBtn from 'src/components/Ddos/DdosConfig/ADodsStartAttackBtn'

const { t: i18n } = useI18n()
</script>
