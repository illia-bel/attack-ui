/**
 * Get info about IP current user
 * @returns {Promise<Object>}
 */
export const getIpAddress = async () => {
  try {
    // services with ip info https://stackoverflow.com/questions/391979/how-to-get-clients-ip-address-using-javascript
    const req = await fetch(
      'http://www.geoplugin.net/json.gp',
    )
    const resp = await req.json()

    return resp
  } catch (error) {
    console.error(error)
    return {}
  }
}
