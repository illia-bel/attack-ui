<template>
  <q-card flat bordered class="my-card">
    <q-card-section v-if="title || slots.title">
      <div class="text-h6">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
    </q-card-section>

    <q-card-section
      v-if="slots.body"
      :class="{
        'q-pt-none': cardHasTitle,
      }"
    >
      <slot name="body" />
    </q-card-section>

    <q-card-section v-if="slots.actions" :align="actionsAlign">
      <slot name="actions" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed, useSlots } from 'vue'
const props = defineProps({
  title: String,
  actionsAlign: {
    type: String,
    default: 'right',
  },
})
const slots = useSlots()

const cardHasTitle = computed(() => {
  return props.title || slots.title
})
</script>

<style lang="scss" scoped></style>
