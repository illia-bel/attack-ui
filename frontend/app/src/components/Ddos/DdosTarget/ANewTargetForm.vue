<template>
  <q-form
    @submit="initSetTarget"
    class="new-taget-form row items-start full-width"
  >
    <q-input
      v-model="targetsListField"
      :label="i18n('attackConfigPage.addTargetFieldLabel')"
      autofocus
      stack-label
      autogrow
      class="col-xs-12 col-md-10"
      :hint="i18n('attackConfigPage.addTargetFieldHint')"
    />
    <q-btn
      :label="i18n('attackConfigPage.addTargetBtnLabel')"
      class="q-ml-lg add-btn bg-blue-1 text-primary"
      type="submit"
    />
  </q-form>
  <q-banner
    v-if="targetsList.length > 1"
    rounded
    class="targets-to-add bg-blue-grey-1 q-mt-md"
  >
    <div class="text-bold">
      {{ i18n('attackConfigPage.targetsAddListTitle') }}:
    </div>
    <div class="row q-gutter-xs q-mt-sm">
      <div
        v-for="(target, key) in targetsList"
        :key="key + target"
        class="q-gutter-xs"
      >
        <q-chip outline color="dark">{{ target }}</q-chip>
      </div>
    </div>

    <q-btn
      :label="i18n('attackConfigPage.addTargetBtnLabel')"
      color="dark"
      class="q-mt-sm"
      @click="initSetTarget"
    />
  </q-banner>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

import isURL from 'validator/lib/isURL'
import isIP from 'validator/lib/isIP'

const { t: i18n } = useI18n()
const store = useStore()

const targetsListField = ref('')

const rmDoubleArrayElements = array => {
  const results = []

  array.forEach(function (value) {
    value = value.trim()

    if (results.indexOf(value) === -1) {
      results.push(value)
    }
  })

  return results
}

// Вытягивает список целей из любого текста
const targetsList = computed(() => {
  const targetsTrim = targetsListField.value.trim()
  const targetsFormattedArray = targetsTrim
    .replace(/ +/g, ' ')
    .replace(/\r?\n/g, ',')
    .replace(/ /g, ',')
    .split(',')
    .map(target => {
      let formattedTarget = target.trim()
      // Добавляем http для ip адресов
      if (isIP(target) && formattedTarget.indexOf('http')) {
        formattedTarget = `http://${formattedTarget}`
      }
      return formattedTarget
    })
    .filter(target => {
      return isURL(target) || isIP(target)
    })

  return rmDoubleArrayElements(targetsFormattedArray)
})

const initSetTarget = () => {
  store.commit('ddos/setTargets', {
    targets: targetsList.value,
    callback() {
      targetsListField.value = ''
    },
  })
}
</script>

<style lang="scss" scouped>
@media screen and (max-width: 920px) {
  .add-btn {
    margin: 16px 0 0 0;
  }
}
</style>
