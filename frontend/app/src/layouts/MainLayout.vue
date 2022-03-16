<template>
  <q-layout view="hHh lpR fFf">
    <a-drawer v-model="drawerState" />
    <a-header v-model="drawerState" />

    <q-page-container>
      <q-page class="q-pl-md q-pr-md q-pb-md main-layout">
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

<style scoped>
.main-layout > .q-card {
  margin-top: 16px;
}
</style>
