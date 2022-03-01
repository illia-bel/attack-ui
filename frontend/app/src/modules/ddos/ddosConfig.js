// Ddos attack page functions

import isURL from 'validator/lib/isURL'
import isIP from 'validator/lib/isIP'
import { i18n } from 'src/modules/i18n'
import { notifyError } from 'src/modules/notify'

/**
 * Validate Target Item
 * @param {String} target
 * @returns
 */
export const validateTarget = (target, targetsList) => {
  if (!target) return

  if (!(isURL(target) || isIP(target))) {
    notifyError(
      i18n('attackConfigPage.invalidTargetNotify'),
    )
    return
  }

  // If target already added to targetsList
  if (targetsList.indexOf(target.trim()) > -1) {
    notifyError(
      i18n('attackConfigPage.targetaAreadyAddedNotify'),
    )
    return
  }

  return true
}
