<template>
  <q-list separator>
    <template
      v-for="({ text, to, showRule, icon }, key) in list"
    >
      <q-item
        v-if="showRule ? showRule() : true"
        :key="key + text"
        :to="to"
        clickable
        v-ripple
      >
        <q-item-section v-if="icon" avatar>
          <q-icon :name="icon" />
        </q-item-section>
        <q-item-section>{{ text }}</q-item-section>
      </q-item>
    </template>
  </q-list>
</template>

<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
})
const emit = defineEmits([])
</script>

<style lang="scss" scouped></style>
