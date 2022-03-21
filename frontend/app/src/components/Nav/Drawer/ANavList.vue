<template>
  <q-list>
    <template
      v-for="(
        { text, to, showRule, icon, type, itemsList }, key
      ) in list"
    >
      <q-item
        v-if="showRule ? showRule() : true"
        :key="key + text"
        :to="to"
        clickable
        v-ripple
        :class="{
          'no-padding': type === 'subnav',
        }"
      >
        <template v-if="type === 'subnav'">
          <q-expansion-item
            v-model="subnavsModels[key]"
            :default-opened="subnavActiveIndex === key"
            group="subnav"
            expand-separator
            :icon="icon"
            :label="i18n(text)"
            class="full-width text-weight-medium"
          >
            <q-list>
              <template
                v-for="(
                  { text: itemLabel, to, showRule, icon },
                  key
                ) in itemsList"
                :key="key + itemLabel"
              >
                <q-item
                  v-if="showRule ? showRule() : true"
                  :to="to"
                  clickable
                  v-ripple
                >
                  <q-item-section avatar>
                    <q-icon :name="icon" />
                  </q-item-section>
                  <q-item-section
                    class="text-weight-regular"
                  >
                    {{ i18n(itemLabel) }}
                  </q-item-section>
                </q-item>
              </template>
            </q-list>
            <q-separator />
          </q-expansion-item>
        </template>
        <template v-else>
          <q-item-section v-if="icon" avatar>
            <q-icon :name="icon" />
          </q-item-section>
          <q-item-section>{{ i18n(text) }}</q-item-section>
        </template>
      </q-item>
    </template>
  </q-list>
</template>

<script setup>
import { reactive, onBeforeMount, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t: i18n } = useI18n()
const route = useRoute()

const subnavsModels = reactive({})
const subnavActiveIndex = ref()

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
})

// Определение ативной вкладки в меню и ее открытие
onBeforeMount(() => {
  const currentPageName = route.name
  for (let i = 0; i < props.list.length; i++) {
    const {
      type: navItemType,
      itemsList,
      to,
    } = props.list[i]

    // Если открытая сейчас страницв не вложенная - выходим
    if (to && to.name === currentPageName) {
      return
    }

    // Отсеиваем все не вложенные пункты
    if (!navItemType === 'subnav' || !itemsList) {
      continue
    }

    // Ищем вложенный пункт где name === name текущей странице
    const activeIndex = itemsList.find(
      ({ to: { name } }) => {
        return name === currentPageName
      },
    )

    if (!activeIndex) {
      continue
    }

    subnavActiveIndex.value = i
  }
})
</script>
