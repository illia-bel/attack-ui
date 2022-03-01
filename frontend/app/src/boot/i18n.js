import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'
import i18nLocales from 'src/i18n'

let userLang =
  localStorage.getItem('lang') ||
  navigator.language ||
  navigator.userLanguage

if (Object.keys(i18nLocales).indexOf(userLang) === -1) {
  userLang = 'en'
}

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
