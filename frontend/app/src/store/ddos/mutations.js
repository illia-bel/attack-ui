import { notifyPrimary } from 'src/modules/notify'
import { validateTarget } from 'src/modules/ddos/ddosConfig'
// import { analytics } from 'src/modules/analytics'
import { i18n } from 'src/modules/i18n'
/**
 * Remove all items from targetsList
 */
export const removeAllTargets = state => {
  // analytics.track('remove-all-targets')
  state.targetsList = []
  state.resultsBrowserAttack = {}
}

/**
 * Remove target item from targetsList
 * @param {Number} index item index in targetsList
 */
export const removeTarget = (state, target) => {
  // analytics.track('remove-target')
  const index = state.targetsList.indexOf(target)
  if (index < 0) return
  state.targetsList.splice(index, 1)
  delete state.resultsBrowserAttack[target]
}

/**
 * Set targets to state
 * @param {Array} targets Target link/ip
 */
export const setTargets = (state, { targets, callback }) => {
  // analytics.track('set-target')

  // Фильтрует цели на валидность
  const filteredTargets = targets.filter(target => {
    const result = validateTarget(target, state.targetsList)

    if (result) {
      state.resultsBrowserAttack[target] = {
        success: 0,
        error: 0,
      }
    }

    return result
  })

  // If target is invalid
  state.targetsList.unshift(...filteredTargets)

  // Удаление результатов старых целей
  for (const tragetResultKey in state.resultsBrowserAttack) {
    if (state.targetsList.indexOf(tragetResultKey) === -1) {
      delete state.resultsBrowserAttack[tragetResultKey]
    }
  }
  notifyPrimary(i18n('attackConfigPage.targetAddedNotify'))

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

  for (let i = 0; i < targets.length; i++) {
    const target = targets[i]
    state.resultsBrowserAttack[target] = {
      success: 0,
      error: 0,
    }
  }
}

/**
 * Set user config ddos
 * @param {Object} config User ddos config
 */
export const setDdosConfig = (state, config) => {
  state.config.user = {
    ...state.config.user,
    ...config,
  }
}

/**
 * Reset config ddos
 */
export const resetDdosConfig = state => {
  const { reqCount, intervalLength } = state.config.default

  state.config.user = {
    ...state.config.user,
    intervalLength,
    reqCount,
  }
}

/**
 * Set common result browser attack
 * @param {String} type success, error
 */
export const setCommonResultsBrowserAttack = (state, type) => {
  state.commonResultsBrowserAttack[type]++
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

    /**
     * target - bool in arg data true - success/ false - error
     */
    const reqResultType = data[target] ? 'success' : 'error'
    // Add statistics count
    results[target][reqResultType]++

    setCommonResultsBrowserAttack(state, reqResultType)
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

/**
 * Set Targets Auto-Update setInterval id
 * @param {Number} id
 */
export const setTargetsAutoUpdateIntervalId = (state, id) => {
  state.targetsAutoUpdateIntervalId = id
}
