<template>
  <q-layout view="hHh lpR fFf">
    <a-drawer v-model="drawerState" />
    <a-header v-model="drawerState" />

    <q-page-container>
      <q-page class="q-pa-md">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import ADrawer from 'src/components/Nav/Drawer/ADrawer'
import AHeader from 'src/components/Nav/Header/AHeader'

const drawerState = ref(false)
</script>
