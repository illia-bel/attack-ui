<template>
  <q-header reveal bordered class="bg-primary">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

      <q-toolbar-title>
        <a-logo />
        <a-indicator/>
      </q-toolbar-title>
      <q-separator vertical spaced="lg" />
      <a-locale-change color="white" />
      <q-separator vertical spaced="lg" />
      <a href="https://t.me/attack_ui_bot" target="_blank">Support</a>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import ALogo from 'src/components/Brand/ALogo'
import AIndicator from 'src/components/Nav/Header/AIndicator'
import ALocaleChange from 'src/components/Nav/ALocaleChange'

const props = defineProps({
  modelValue: Boolean,
})
const emit = defineEmits(['update:modelValue'])

const toggleLeftDrawer = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>

<style lang="scss">
  .hidden {
    display: none;
  }

  .status-badge {
    width: 0;
    height: 0;
    margin: 8px;
    animation: heart-pulse 0.9s infinite ease-out;

    .q-icon {
      width: 0;
      height: 0;
    }
  }

  @keyframes heart-pulse {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    70% {
      transform: scale(0.65);
    }
    100% {
      transform: scale(0);
    }
  }
</style>
