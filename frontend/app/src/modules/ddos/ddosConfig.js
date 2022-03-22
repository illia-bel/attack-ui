// Ddos attack page functions
import { isURL } from 'src/modules/validate'
import isIP from 'validator/lib/isIP'

/**
 * Validate Target Item
 * @param {String} target
 * @returns
 */
export const validateTarget = (target, targetsList) => {
  if (!target) return

  if (!(isURL(target) || isIP(target))) {
    return
  }

  // If target already added to targetsList
  if (targetsList.indexOf(target.trim()) > -1) {
    return
  }

  return true
}

/**
 *
 * @param {String} link
 */
export const validateTargetsSourceFile = async link => {
  try {
    const req = await fetch(link)
    const targetsList = await req.json()

    if (!Array.isArray(targetsList)) {
      return
    }

    let errorsCount = 0
    targetsList.forEach(target => {
      if (isURL(target) || isIP(target)) {
        return true
      }

      errorsCount++
    })

    return errorsCount === 0
  } catch (error) {
    console.error(error)
  }
}
