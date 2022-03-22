/**
 * @returns {Array}
 */
export const getTargetsList = state => {
  return state.targetsList ?? []
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

/**
 * @returns {Object}
 */
export const getCommonResultsBrowserAttack = state => {
  return state.commonResultsBrowserAttack
}

export const getIsTargetsAutoUpdateEnabled = state => {
  const { user: userConfig, default: defaultConfig } = state.config

  return userConfig.isTargetsAutoUpdateEnabled ?? defaultConfig.isTargetsAutoUpdateEnabled
}

export const getTargetsAutoUpdateInterval = state => {
  const { user: userConfig, default: defaultConfig } = state.config

  return userConfig.targetsAutoUpdateInterval || defaultConfig.targetsAutoUpdateInterval
}

export const getTargetsFileUrl = state => {
  const { user: userConfig, default: defaultConfig } = state.config

  return userConfig.targetsFileUrl || defaultConfig.targetsFileUrl
}

export const getTargetsAutoUpdateIntervalId = state => {
  return state.targetsAutoUpdateIntervalId
}
