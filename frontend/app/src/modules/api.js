/**
 * Fetch targets for attack
 * @returns {Object}
 */
export const fetchTargets = async () => {
  try {
    const req  = await fetch('/targets.json')
    const resp = await req.json()

    return resp.list
  } catch (error) {
    console.error(error)

    return []
  }
}

/**
 * Get a emails list of Russians
 * @returns {Promise<Array>}
 */
export const getRussiansEmailsList = async () => {
  try {
    const req = await fetch(
      'https://raw.githubusercontent.com/NIRVANA101/Russian-GBSB/main/CONTENTS/Emails/emails.json',
    )
    const resp = await req.json()

    return Array.isArray(resp) ? resp : []
  } catch (error) {
    console.error(error)
    return []
  }
}
