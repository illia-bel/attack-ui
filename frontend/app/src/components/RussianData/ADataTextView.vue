<template>
  <div class="row items-center">
    <q-input
      v-model="dataSeparatorValue"
      :label="i18n('russianDataPage.listSeparator')"
      stack-label
      class="q-mr-md col-12 col-sm-4 col-md-2"
    />
    <q-btn
      @click="copyData"
      :label="i18n('russianDataPage.copyData')"
      icon="content_copy"
      no-caps
      color="primary"
      class="copy-btn"
    />
  </div>
  <div class="q-mt-sm">
    <a v-if="sourceLink" :href="sourceLink" target="_blank" class="text-primary">
      {{ i18n('russianDataPage.openJsonBtn') }}
    </a>
  </div>
  <q-input v-model="formattedData" autogrow borderless :class="dataInputId" />
</template>

<script setup>
import { watch, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { notifyPrimary } from 'src/modules/notify'

const { t: i18n } = useI18n()

const props = defineProps({
  dataList: {
    type: Array,
    default: () => [],
  },
  sourceLink: {
    type: String,
  },
})

// уникальный класс textarea с данными для копирования
const dataInputId = ref('data-input-' + Date.now())

// model value для разделителя
const dataSeparatorValue = ref('\n')

// Данные приведенные к единому формату
const formattedData = ref(props.dataList.join(dataSeparatorValue.value))

// следит за обновлением списка данных
watch(props.dataList, val => {
  formattedData.value = val.join(dataSeparatorValue.value)
})

// следит за обновлением разделителя данных
watch(dataSeparatorValue, separator => {
  formattedData.value = props.dataList.join(separator)
})

/**
 * Copy data
 */
const copyData = () => {
  /* Get the text field */
  const copyText = document.querySelector(`.${dataInputId.value} textarea`)

  if (!copyText) {
    return
  }

  /* Select the text field */
  copyText.select()
  copyText.setSelectionRange(0, 9999999) /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value)
  notifyPrimary(i18n('russianDataPage.dataIsCopied'))
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 600px) {
  .copy-btn {
    margin: 16px 0 0 0;
  }
}
</style>
