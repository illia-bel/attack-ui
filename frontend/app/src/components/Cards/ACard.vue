<template>
  <q-card flat bordered class="my-card">
    <q-card-section v-if="title || this.$slots.title">
      <div class="text-h6">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
    </q-card-section>

    <q-card-section
      v-if="this.$slots.body"
      :class="{
        'q-pt-none': cardHasTitle,
      }"
    >
      <slot name="body" />
    </q-card-section>

    <q-card-section
      v-if="this.$slots.actions"
      align="right"
    >
      <slot name="actions" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed, useSlots } from 'vue'
const props = defineProps({
  title: String,
})
const slots = useSlots()

const cardHasTitle = computed(() => {
  return props.title || slots.title
})
</script>

<style lang="scss" scouped></style>
