# Attack UI

⚠️ This site is a project for load testing your own projects. The administration does not bear any responsibility for the illegal use of this resource

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
