/**
 * Get targets for attack
 * @returns {Object}
 */
export const getDefaultTargets = async () => {
  const req = await fetch(
    'https://raw.githubusercontent.com/ilya-belik/targets/main/targets.json',
  )
  const resp = await req.json()
  return resp
}
