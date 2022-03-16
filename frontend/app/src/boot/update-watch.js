import { boot } from 'quasar/wrappers'
import { confirmDialog } from 'src/modules/dialog'
import { i18n } from 'src/modules/i18n'

let fetchVersionInteval
let updateNotifyShow = false

/**
 * Fetch app version
 * @returns {String}
 */
const fetchVersion = async () => {
  try {
    const req = await fetch('/app.config.json')
    const resp = await req.json()

    return resp.version
  } catch (error) {
    console.error(error)

    return process.env.VERSION
  }
}

const updateAppConfirmDialog = async newVersion => {
  if (updateNotifyShow) return
  updateNotifyShow = true

  const resp = await confirmDialog({
    title: i18n('updatesNotify.title') + ` ${newVersion}`,
    message: i18n('updatesNotify.message'),
    okLabel: i18n('updatesNotify.okBtnLabel'),
    cancelLabel: i18n('updatesNotify.cancelBtnLabel'),
  })

  if (!resp) {
    clearInterval(fetchVersionInteval)
    updateNotifyShow = false
    return
  }
  location.reload()
}
export default boot(({ app }) => {
  fetchVersionInteval = setInterval(async () => {
    const fetchedVersion = await fetchVersion()

    // Если новых обновлений нет
    if (
      Number(process.env.VERSION.replace(/\./g, '')) >=
      Number(fetchedVersion.replace(/\./g, ''))
    ) {
      return
    }
    updateAppConfirmDialog(fetchedVersion)
  }, 30 * 1000)
})
