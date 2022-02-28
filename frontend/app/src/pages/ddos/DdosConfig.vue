<template>
  <a-card class="col-12" title="DDOS Configuration">
    <template #body>
      <a-new-target-form />
      <a-targets-list />
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
import { useStore } from 'vuex'

import ATargetsList from 'src/components/Ddos/ATargetsList'
import ANewTargetForm from 'src/components/Ddos/ANewTargetForm'
import ACard from 'src/components/Cards/ACard'

const store = useStore()

onBeforeMount(() => {
  store.dispatch('ddos/setDefaultTargets')
})

const removeAllTargets = () => {
  store.commit('ddos/removeAllTargets')
}
</script>

<style lang="scss" scouped></style>
