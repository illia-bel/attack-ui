<template>
  <a-card class="col-12 q-mt-md" :title="i18n('donatePage.pageTitle')">
    <template #body>
      <q-list>
        <q-item v-for="({ name, accountNumber, qr, type }, key) in payMethods" :key="key" class="pa-0">
          <q-item-section>
            <div class="pay-method-container">
              <b>{{ name }}: </b>

              <template v-if="type === 'link'">
                <a :href="accountNumber" target="_blank" class="text-weight-regular text-primary">
                  {{ accountNumber }}
                </a>
              </template>
              <template v-else>
                {{ accountNumber }}
                <q-btn @click="copyAccountNumber(key)" icon="content_copy" dense />

                <input type="text" :value="accountNumber" class="copy-input" :id="'number-' + key" />
              </template>

              <q-btn v-if="qr" @click="openQrDialog(qr)" icon="qr_code" dense />
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </template>
  </a-card>

  <q-dialog v-model="qrDialogOpen">
    <q-card>
      <q-card-section>
        <img :src="qrPath" alt="" class="pay-qr-code" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { notifyPrimary } from 'src/modules/notify'

import ACard from 'src/components/Cards/ACard'

const { t: i18n } = useI18n()

const qrDialogOpen = ref(false)
const qrPath = ref()

const payMethods = [
  {
    name: 'Monobank',
    accountNumber: '4441114457242749',
  },
  {
    name: 'PrivatBank',
    accountNumber: 'https://privatbank.ua/ru/sendmoney?payment=43031ab41d',
    type: 'link',
    // qr: '/img/pay-qr/privat-qr.png',
  },
  {
    name: 'Bitcoin',
    accountNumber: '1NSW3q3o7DGAjWCJoGvrr74LCVngH3KBvg',
    qr: '/img/pay-qr/btc-qr.png',
  },
  {
    name: 'Ethereum',
    accountNumber: '0xa1b2c4e65b4cf36160b7e35e78474d348e2914449',
    qr: '/img/pay-qr/etn-qr.png',
  },
]

/**
 * Copy account number
 * @param {Number} index index pay method in payMethods array
 */
const copyAccountNumber = index => {
  /* Get the text field */
  const copyText = document.getElementById('number-' + index)

  /* Select the text field */
  copyText.select()

  /* Copy the text inside the text field */
  document.execCommand('copy')

  /* Alert the copied text */
  notifyPrimary(`${i18n('donatePage.number')} ${payMethods[index].name} ${i18n('donatePage.copied')}`)
}

/**
 *
 * @param {String} qrImgPath
 */
const openQrDialog = qrImgPath => {
  qrDialogOpen.value = true
  qrPath.value = qrImgPath
}
</script>

<style lang="scss" scoped>
.pay-qr-code {
  width: auto;
  height: 200px;
}

.pay-method-container {
  position: relative;
  overflow: hidden;
}
.copy-input {
  display: block;
  position: absolute;
  top: -100px;
}
</style>
