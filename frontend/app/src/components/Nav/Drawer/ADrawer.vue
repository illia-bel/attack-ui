<template>
  <q-drawer
    v-model="leftDrawerState"
    show-if-above
    side="left"
    :width="280"
    bordered
  >
    <a-nav-list :list="navList" />
  </q-drawer>
</template>

<script setup>
import { computed } from 'vue'
import ANavList from 'src/components/Nav/Drawer/ANavList'

const props = defineProps({
  modelValue: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const leftDrawerState = computed({
  get() {
    return props.modelValue
  },
  set(state) {
    emit('update:modelValue', state)
  },
})

/**
 * @example
 * {
    text: 'Nav Link Text',
    icon: '', // icon name
    // router link object
    to: {
      name: 'PageName',
      // hash, query, path.... 
    },

    // show if showRule return true
    showRule: () => {
      return process.env.dev
    },
  },
 */
const navList = [
  {
    text: 'DDOS Attack',
    icon: 'dns',
    to: {
      name: 'DdosAttack',
    },
  },
]
</script>
