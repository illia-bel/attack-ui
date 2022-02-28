// Уведомления quasar

import { Notify } from 'quasar'

const config = {
  timeout: 1500,
  progress: true,
  actions: [{ icon: 'close', color: 'white' }],
}

/**
 * Quasar Notify со стилями - SUCCESS
 * @param {String} message
 */
export const notifySuccess = message => {
  Notify.create({
    type: 'positive',
    message,
    ...config,
  })
}

/**
 * Quasar Notify со стилями - ERROR
 * @param {String} message
 */
export const notifyError = message => {
  Notify.create({
    type: 'negative',
    message,
    ...config,
  })

  return true
}

/**
 * Quasar Notify со стилями - Warning
 * @param {String} message
 */
export const notifyWarning = message => {
  Notify.create({
    message,
    ...config,
  })
}

/**
 * Quasar Notify со стилями - нейтральный
 * @param {String} message
 */
export const notifyPrimary = message => {
  Notify.create({
    message,
    ...config,
  })
}
