import { notifyPrimary } from 'src/modules/notify'
import { validateTarget } from 'src/modules/ddos/ddosConfig'

/**
 * Remove all items from targetsList
 */
export const removeAllTargets = state => {
  state.targetsList = []
}

/**
 * Remove target item from targetsList
 * @param {Number} index item index in targetsList
 */
export const removeTarget = (state, index) => {
  state.targetsList.splice(index, 1)
}

/**
 * Set targets to state
 * @param {Object} state
 * @param {Array} target Target link/ip
 */
export const setTarget = (state, { target, callback }) => {
  // If target already added
  if (state.targetsList.indexOf(target) > 0) return

  // If target is invalid
  if (!validateTarget(target)) return
  state.targetsList.unshift(target)
  notifyPrimary('Target added')

  if (!callback) return
  callback()
}

/**
 * Set default targets list to state
 * @param {Object} state
 * @param {Array} targets default targets list
 */
export const setInitTargets = (state, targets) => {
  removeAllTargets(state)
  state.targetsList.push(...targets)
}
