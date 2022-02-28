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
      class="col-4"
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

import { setTarget } from 'src/modules/ddos/ddosConfig'

const target = ref()
const initSetTarget = () => {
  const result = setTarget(target.value)
  if (!result) return
  target.value = ''
}
</script>

<style lang="scss" scouped></style>
