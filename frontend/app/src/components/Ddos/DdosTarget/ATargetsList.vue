<template>
  <!-- Targets List Chips -->
  <div class="row q-gutter-xs q-mt-lg">
    <div v-for="(target, key) in targetsList" :key="key + target" class="q-gutter-xs">
      <q-chip removable outline color="primary" @remove="removeTarget(target)">
        <q-tooltip>
          {{ i18n('attackConfigPage.targetTooltipText') }}
        </q-tooltip>
        <a :href="target" target="_blank">{{ target }}</a>
      </q-chip>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

const { t: i18n } = useI18n()
const store = useStore()

onBeforeMount(() => {
  !targetsList.value.length && store.dispatch('ddos/setDefaultTargets')
})

/**
 * Remove one target item
 * @param {Number} index index target item in array
 */
const removeTarget = target => store.commit('ddos/removeTarget', target)

const targetsList = computed(() => store.getters['ddos/getTargetsList'])
</script>
