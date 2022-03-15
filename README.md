# Attack UI

Deploy shh

```sh
cd && \
cd apexi.tech/war/ && \
git clone https://github.com/ilya-belik/attack-ui.git -b build && \
ls | grep -v 'attack-ui' | xargs rm -rf && \
cp ./attack-ui/.[^.]* ./ -R -n -v && \
rm -rf ./attack-ui
```
