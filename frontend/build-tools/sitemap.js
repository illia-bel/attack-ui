const fs = require('fs')

const jsonSitemapPaths = ['frontend/app/public/sitemap.json', 'frontend/site/public/sitemap.json']
const pagesList = []

for (let i = 0; i < jsonSitemapPaths.length; i++) {
  const pathJsonSitemap = jsonSitemapPaths[i]

  try {
    const readSitemap = JSON.parse(fs.readFileSync(pathJsonSitemap, 'utf8')).map(({ location, lastmod }) => {
      return {
        location,
        lastmod: lastmod || new Date().toISOString().split('T')[0],
      }
    })

    pagesList.push(...readSitemap)
  } catch (error) {
    console.error(pathJsonSitemap, error)
  }
}

const generateSitemapData = () => {
  let urlSet = ``

  pagesList.forEach(({ location, lastmod }) => {
    urlSet =
      urlSet +
      `<url>
  <loc>${location}</loc>
  <lastmod>${lastmod}</lastmod>
</url>`
  })

  const sitemapData = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlSet}
</urlset>`

  return sitemapData
}

const sitemap = generateSitemapData()
fs.writeFileSync('frontend/dist/sitemap.xml', sitemap)
