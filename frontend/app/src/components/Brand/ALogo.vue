<template>
  <!-- App Logo -->
  {{ brandName }}
</template>

<script setup>
import { ref } from 'vue'

// Get App Name from env (quasar.conf.js)
const brandName = ref(process.env.BRAND_NAME)
</script>
