# Attack UI

⚠️ This project is a load testing project for your own websites. The developers are not responsible for the illegal use of this resource
---

## Start Project
1. Install Node js https://nodejs.org
2. `npx yarn`
3. `npx yarn workspace attack-ui-app start`

## Deploy shh

```sh
cd && \
cd apexi.tech/war/ && \
git clone https://github.com/ilya-belik/attack-ui.git -b build && \
ls | grep -v 'attack-ui' | xargs rm -rf && \
cp ./attack-ui/. ./ -R -n -v && \
rm -rf ./attack-ui
```
