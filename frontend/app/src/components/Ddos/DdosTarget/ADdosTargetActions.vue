<template>
  <q-btn
    label="Remove All Targets"
    color="red"
    flat
    @click="removeAllTargets"
  />
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
const removeAllTargets = () => {
  store.commit('ddos/removeAllTargets')
}
</script>

<style lang="scss" scouped></style>
