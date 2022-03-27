rm -Rf -d frontend/dist && \
mkdir frontend/dist && \
mkdir frontend/dist/site && \
cp -R frontend/app/dist/spa/. frontend/dist && \
cp -R frontend/site/public/. frontend/dist/site
node frontend/build-tools/sitemap.js
rm frontend/dist/sitemap.json