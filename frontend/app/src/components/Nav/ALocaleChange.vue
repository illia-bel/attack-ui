<template>
  <!-- Переключение языка -->
  <q-select
    v-model="locale"
    :options="localeOptions"
    borderless
    emit-value
    map-options
    options-dense
    behavior="menu"
    hide-dropdown-icon
    hide-bottom-space
  >
    <template #prepend>
      <q-icon name="language" size="sm" :color="color" />
    </template>
    <template #selected-item="{ opt }">
      <span :class="`text-${color}`">{{ opt.label }}</span>
    </template>
  </q-select>
</template>

<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  color: {
    type: String,
    default: 'white',
  },
})

const { locale, t: i18n } = useI18n({
  useScope: 'global',
})

const localeOptions = [
  { value: 'ru', label: 'Русский' },
  { value: 'en', label: 'English' },
]

// We monitor the language update and write the result to Local Storage
watch(locale, () => {
  localStorage.setItem('lang', locale.value)
})
</script>
