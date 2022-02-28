// Ddos attack page functions

import isURL from 'validator/lib/isURL'
import isIP from 'validator/lib/isIP'

import { notifyError } from 'src/modules/notify'

/**
 * Validate Target Item
 * @param {String} target
 * @returns
 */
export const validateTarget = target => {
  if (!target) return

  if (!(isURL(target) || isIP(target))) {
    notifyError('It doesn`t look like a url or ip address')
    return
  }

  // If target already added to targetsList
  if (targetsList.indexOf(target.trim()) > -1) {
    notifyError('Target already added')
    return
  }

  return true
}
