---------

## <img src="https://i.giphy.com/media/nWGRHBnAl5Kmc/giphy.gif" alt="Instalacion" width="40" height="40"> Instalación en [termux](https://f-droid.org/repo/com.termux_118.apk)

```bash
cd && termux-setup-storage
```

```bash
apt-get update -y && apt-get upgrade -y
```

```bash
pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn 
```

```bash
git clone https://github.com/MultiBot-OFC/MultiBot-OFC.git && cd MultiBot-OFC && yarn install && npm install && npm update && npm start
```

- Después de eso te aparecerά un código **QR** lo escaneas con el Whatsapp web y listo

### ACTUALIZAR EL BOT

```bash
grep -q 'bash\|wget' <(dpkg -l) || apt install -y bash wget && wget -O - https://raw.githubusercontent.com/MultiBot-OFC/MultiBot-OFC/master/update.sh | bash
```
