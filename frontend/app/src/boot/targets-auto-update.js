import { boot }          from 'quasar/wrappers'
import { i18n }          from 'src/modules/i18n'
import { notifyPrimary } from 'src/modules/notify'

export default boot(({ store }) => {
  const isTargetsAutoUpdateEnabled = store.getters['ddos/getIsTargetsAutoUpdateEnabled']
  const targetsAutoUpdateInterval  = store.getters['ddos/getTargetsAutoUpdateInterval']

  if (!isTargetsAutoUpdateEnabled) return

  const targetsAutoUpdateIntervalId = setInterval(async () => {
    store.dispatch('ddos/setDefaultTargets')

    notifyPrimary(i18n('attackConfigPage.targetsAutoUpdate.notification'))
  }, targetsAutoUpdateInterval * 60 * 1000)

  store.commit('ddos/setTargetsAutoUpdateIntervalId', targetsAutoUpdateIntervalId)
})
