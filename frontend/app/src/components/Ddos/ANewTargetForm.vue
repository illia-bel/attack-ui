<template>
  <q-form
    @submit="initSetTarget"
    class="row items-baseline full-width"
  >
    <q-input
      v-model="target"
      label="Link/ip to target"
      autofocus
      stack-label
      class="col-8 col-md-4"
    />
    <q-btn
      label="Add"
      color="primary"
      class="q-ml-lg"
      type="submit"
    />
  </q-form>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const target = ref()

const initSetTarget = () => {
  store.commit('ddos/setTarget', {
    target: target.value,
    callback() {
      target.value = ''
    },
  })
}
</script>

<style lang="scss" scouped></style>
