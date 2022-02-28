<template>
  <a-card class="col-12">
    <template #actions>
      <q-btn
        label="start attack"
        @click="startAttack"
        color="primary"
      />
    </template>
  </a-card>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import ACard from 'src/components/Cards/ACard'

const store = useStore()
const router = useRouter()
const startAttack = () => {
  store.dispatch('ddos/destroyBrowserAttack')
  store.commit('ddos/setBrowserAttackStatus', true)
  router.push({ name: 'DdosAttack' })
}
</script>
