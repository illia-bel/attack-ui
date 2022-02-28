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
 * @param {Array} targets default targets list
 */
export const setInitTargets = (state, targets) => {
  removeAllTargets(state)
  state.targetsList.push(...targets)
}

/**
 * Set user config ddos
 * @param {Object} config User ddos config
 */
export const setDdosConfig = (state, config) => {
  for (const key in config) {
    config[key] = Number(config[key])
  }

  state.config.user = config
}

/**
 * Reset config ddos
 */
export const resetDdosConfig = state => {
  state.config.user = state.config.default
}

/**
 *
 * @param {Array} data
 * {
 *    target: true/false
 * }
 */
export const setResultsBrowserAttack = (state, data) => {
  const results = state.resultsBrowserAttack

  for (const target in data) {
    // If target property is not created
    if (!results[target]) {
      results[target] = {
        success: 0,
        error: 0,
      }
    }

    // Add statistics count
    results[target][data[target] ? 'success' : 'error']++
  }
}

/**
 * Set Browser Attack Status
 * @param {Boolean} status true - active/ false - disable
 */
export const setBrowserAttackStatus = (state, status) => {
  state.browserAttackStatus = status
}

/**
 * Set setInterval id
 * @param {Number} id
 */
export const setBrowserAttackIntervalId = (state, id) => {
  state.browserAttackIntervalId = id
}
