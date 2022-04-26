<template>
  <q-drawer v-model="leftDrawerState" show-if-above side="left" :width="280" bordered>
    <a-nav-list :list="navList" />
    <a-denial-of-responsibility-notify class="q-mt-lg" />
  </q-drawer>
</template>

<script setup>
import { computed } from 'vue'
import ANavList from 'src/components/Nav/Drawer/ANavList'
import ADenialOfResponsibilityNotify from 'src/components/Notify/ADenialOfResponsibilityNotify'

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


  {
    text: 'Subnav Title',
    icon: '', // icon name
    type: 'subnav',    

    // show if showRule return true
    showRule: () => {
      return process.env.dev
    },
  },
 */

const navList = [
  {
    text: 'nav.ddos.subnavLabel',
    icon: 'dns',
    type: 'subnav',
    itemsList: [
      {
        text: 'nav.ddos.dasboardLabel',
        to: {
          name: 'DdosAttack',
        },
      },
      {
        text: 'nav.ddos.configLabel',
        to: {
          name: 'DdosConfig',
        },
      },
    ],
  },
  {
    text: 'nav.russianData.subnavLabel',
    icon: 'list_alt',
    type: 'subnav',
    itemsList: [
      {
        text: 'nav.russianData.emailsLabel',
        to: {
          name: 'RussianEmails',
        },
      },
    ],
  },
  {
    text: 'nav.donatePage',
    icon: 'payments',
    to: {
      name: 'DonatePage',
    },
  },
  {
    text: 'nav.telegram',
    icon: 'group',
    to: '/https://t.me/+crdzxQgxVNg3ZTBi',
  },
  {
    text: 'nav.github',
    icon: 'code',
    to: '/https://github.com/ilya-belik/attack-ui',
  },
]
</script>
