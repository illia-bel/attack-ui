// Ddos attack page functions

import { reactive } from 'vue'
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
 * Add target item to targetsList
 * @param {String} target
 */
export const addTarget = target => {
  // If target already added to targetsList
  if (targetsList.indexOf(target) > -1) {
    notifyError('Target already added')
    return
  }
  targetsList.unshift(target)
  notifyPrimary('Target added')
}

/**
 * Remove all items from targetsList
 */
export const removeAllTargets = () => {
  targetsList.splice(0, targetsList.length)
}
