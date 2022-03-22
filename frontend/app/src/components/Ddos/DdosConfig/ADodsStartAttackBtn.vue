<template>
  <q-btn :label="label" @click="startAttack" color="primary" />
</template>

<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
})

const store = useStore()
const router = useRouter()
const startAttack = () => {
  store.dispatch('ddos/destroyBrowserAttack')
  store.commit('ddos/setBrowserAttackStatus', true)
  router.push({ name: 'DdosAttack' })
}
</script>
