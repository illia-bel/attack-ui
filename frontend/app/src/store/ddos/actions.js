import { getDefaultTargets } from 'src/modules/api'
import { notifyError } from 'src/modules/notify'

/**
 * Request default targets list
 */
export const setDefaultTargets = async context => {
  try {
    if (context.getters.getTargetsList.length > 0) return

    const respTargets = await getDefaultTargets()
    context.commit('setInitTargets', respTargets)
  } catch (error) {
    notifyError('Error requesting default targets')
    console.error(error)
  }
}
