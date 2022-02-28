/**
 * @returns {Array}
 */
export const getTargetsList = state => {
  return state.targetsList
}

/**
 * @returns {Object}
 */
export const getDdosConfig = state => {
  return state.config
}

/**
 * @returns {Object}
 */
export const getResultsBrowserAttack = state => {
  return state.resultsBrowserAttack
}

/**
 * @returns {Boolean} status true - active/ false - disable
 */
export const getBrowserAttackStatus = state => {
  return state.browserAttackStatus
}
/**
 * @returns {Array}
 */
export const getBrowserAttackResults = state => {
  return Object.entries(state.resultsBrowserAttack).map(
    ([target, result]) => {
      return {
        target,
        ...result,
      }
    },
  )
}

/**
 * @returns {Number}
 */
export const getBrowserAttackIntervalId = state => {
  return state.browserAttackIntervalId
}
