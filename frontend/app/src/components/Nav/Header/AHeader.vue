<template>
  <q-header reveal bordered class="bg-primary text-white">
    <q-toolbar>
      <q-btn
        dense
        flat
        round
        icon="menu"
        @click="toggleLeftDrawer"
      />

      <q-toolbar-title>
        <a-logo />
      </q-toolbar-title>

      <a
        href="https://github.com/ilya-belik/attack-ui/"
        target="_blank"
        >GitHub</a
      >
    </q-toolbar>
  </q-header>
</template>

<script setup>
import ALogo from 'src/components/Brand/ALogo'

const props = defineProps({
  modelValue: Boolean,
})
const emit = defineEmits(['update:modelValue'])

const toggleLeftDrawer = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>
