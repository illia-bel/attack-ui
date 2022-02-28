// Ddos attack page functions

import { reactive } from 'vue'
import isURL from 'validator/lib/isURL'
import isIP from 'validator/lib/isIP'

import {
  notifyError,
  notifyPrimary,
} from 'src/modules/notify'
import { getDefaultTargets } from 'src/modules/api'

export const targetsList = reactive([])

/**
 * Request default targets list
 */
export const fetchTargets = async () => {
  try {
    const respTargets = await getDefaultTargets()
    targetsList.push(...respTargets)
  } catch (error) {
    console.error(error)
  }
}

/**
 * Remove target item from targetsList
 * @param {Number} index item index in targetsList
 */
export const removeTarget = index => {
  targetsList.splice(index, 1)
}

/**
 * Validate Target Item
 * @param {String} target
 * @returns
 */
const validateTarget = target => {
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

/**
 * Add target item to targetsList
 * @param {String} target
 */
export const setTarget = target => {
  if (!validateTarget(target)) return
  targetsList.unshift(target.trim())
  notifyPrimary('Target added')

  return true
}

/**
 * Remove all items from targetsList
 */
export const removeAllTargets = () => {
  targetsList.splice(0, targetsList.length)
}
