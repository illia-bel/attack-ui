/**
 * Get info about IP current user
 * @returns {Promise<Object>}
 */
export const getIpAddress = async () => {
  try {
    // services with ip info https://stackoverflow.com/questions/391979/how-to-get-clients-ip-address-using-javascript
    const req = await fetch('https://api.db-ip.com/v2/free/self')
    const resp = await req.json()

    return resp
  } catch (error) {
    console.error(error)
    return {}
  }
}
