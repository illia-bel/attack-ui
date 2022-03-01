import { i18n as vueI18n } from 'src/boot/i18n'

/**
 * Helper i18n form js files
 * @param {String} key
 * @returns {*}
 */
export const i18n = key => {
  return vueI18n.global.t(key)
}
