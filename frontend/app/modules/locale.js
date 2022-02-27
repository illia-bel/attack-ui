import { Quasar } from 'quasar'

// Получить язык по умолчанию юзера
export const getUserLocale = () => {
  return Quasar.lang.getLocale()
}
