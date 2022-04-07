<template>
  <q-dialog v-model="dialogModel">
    <q-card>
      <q-card-section>
        <div class="text-h6">🔥 Вы можете помочь проекту</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Для этого совсем не обязательно уметь писать код. Достаточно просто пожертвовать любую сумму удобным способом
        перейдя по ссылке
        <router-link :to="{ name: 'DonatePage' }" class="text-primary" v-close-popup>war.apexi.tech/donate</router-link>
        или нажать кпопку "Помочь проекту"
      </q-card-section>

      <q-card-actions align="right">
        <q-btn @click="refuseToDonate" flat label="Отказаться" color="grey" v-close-popup no-caps />
        <q-btn :to="{ name: 'DonatePage' }" flat label="🚀 Помочь проекту" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const dialogModel = ref(false)

const refuseToDonate = () => {
  setTimeout(() => {
    if (route.name === 'DonatePage') return
    dialogModel.value = true
  }, 60 * 1000)
}

setTimeout(() => {
  if (route.name === 'DonatePage') return
  dialogModel.value = true
}, 3000)
</script>

<style lang="scss" scoped></style>
