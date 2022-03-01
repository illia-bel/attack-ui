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

      <a-locale-change color="white" />
    </q-toolbar>
  </q-header>
</template>

<script setup>
import ALogo from 'src/components/Brand/ALogo'
import ALocaleChange from 'src/components/Nav/ALocaleChange'

const props = defineProps({
  modelValue: Boolean,
})
const emit = defineEmits(['update:modelValue'])

const toggleLeftDrawer = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>
