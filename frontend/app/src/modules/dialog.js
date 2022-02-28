import { Dialog } from 'quasar'

/**
 * Окно подтвержения
 * @param {String} title
 * @param {String} message
 * @returns {Boolean} true - подверждение , false - отказ
 */
export const confirmDialog = async ({
  title,
  message,
  okLabel,
  cancelLabel,
}) => {
  return await new Promise(resolve => {
    Dialog.create({
      title,
      message,
      cancel: true,

      ok: {
        label: okLabel,
        noCaps: true,
        color: 'dark',
      },
      cancel: {
        label: cancelLabel,
        noCaps: true,
        flat: true,
        color: 'red',
      },
    })
      .onOk(() => {
        resolve(true)
      })
      .onOk(() => {
        resolve(true)
      })
      .onCancel(() => {
        resolve(false)
      })
      .onDismiss(() => {
        resolve(false)
      })
  })
}
