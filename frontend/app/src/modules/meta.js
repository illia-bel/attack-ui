// Метаданные страницы

/**
 * Обновление метаданных на странице
 * @param {String} title
 */
export const useMeta = ({ title }) => {
  //
  document.title = `${title || ''} ${title ? '-' : ''} ${
    process.env.BRAND_NAME
  }`
}
