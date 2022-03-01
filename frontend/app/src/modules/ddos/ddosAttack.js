import { confirmDialog } from 'src/modules/dialog'
import { i18n } from 'src/modules/i18n'

/**
 * Send requests to targets
 * @param {Array} targetsList
 * @returns {Promise<Array>}
 */
export const initSendReqests = async targetsList => {
  return await new Promise((resolve, reject) => {
    const results = {}

    for (let i = 0; i < targetsList.length; i++) {
      try {
        const target = targetsList[i]

        // needed to interrupt the request
        const controller = new AbortController()
        const timeoutId = setTimeout(
          () => controller.abort(),
          10000,
        )

        fetch(target, {
          method: 'GET',
          mode: 'no-cors',
          signal: controller.signal,
        })
          .then(resp => {
            results[target] = resp.ok
          })
          .catch(() => {
            results[target] = false
          })
          .finally(() => {
            clearTimeout(timeoutId)

            // if this is not the last request - return
            if (
              Object.keys(results).length !==
              targetsList.length
            ) {
              return
            }

            resolve(results)
          })
      } catch (error) {
        console.error(error)
      }
    }
  })
}

/**
 * Dialod window with notification of the start of the attack
 */
export const startAttackNotify = () => {
  confirmDialog({
    title: i18n(
      'attackConfigPage.attackStartedDialog.title',
    ),
    message: i18n(
      'attackConfigPage.attackStartedDialog.description',
    ),
    okLabel: i18n(
      'attackConfigPage.attackStartedDialog.okBtnLabel',
    ),
  })
}
