import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'

const userLang =
  localStorage.getItem('lang') ||
  navigator.language ||
  navigator.userLanguage

export let i18n
export default boot(({ app }) => {
  i18n = createI18n({
    legacy: false,
    locale: userLang,
    messages,
  })
  // Set i18n instance on app
  app.use(i18n)
})
