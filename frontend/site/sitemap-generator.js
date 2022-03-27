const fs = require('fs')
const config = require('./config.json')

const pagesList = fs
  .readdirSync('./public/')
  .filter(fileName => fileName.indexOf('.html') > -1)
  .map(pageName => {
    return {
      lastmod: new Date().toISOString().split('T')[0],
      location: `${config.siteAddress}/${pageName}`,
    }
  })

fs.writeFileSync('./public/sitemap.json', JSON.stringify(pagesList))
