<template>
  <a-card class="col-12">
    <template #actions>
      <q-btn
        :label="
          i18n('attackConfigPage.startAttackBtnLabel')
        "
        @click="startAttack"
        color="primary"
      />
    </template>
  </a-card>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import ACard from 'src/components/Cards/ACard'

const { t: i18n } = useI18n()
const store = useStore()
const router = useRouter()
const startAttack = () => {
  store.dispatch('ddos/destroyBrowserAttack')
  store.commit('ddos/setBrowserAttackStatus', true)
  router.push({ name: 'DdosAttack' })
}
</script>
