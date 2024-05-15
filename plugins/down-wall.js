import { wallpaper } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mssg.eTexto} *Universo*`
try {
const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
const img = res[Math.floor(Math.random() * res.length)]
let link = img
conn.sendButton(m.chat, `${mssg.aquiImagen}\n`, `${wm}`, img, [
[mssg.botonA, `${usedPrefix + command} ${text}`],
[mssg.botonC, `${usedPrefix}menu`],
[mssg.botonZ, `${usedPrefix}menujuegos`]], null, null, fkontak)

} catch (e) {
await conn.reply(m.chat, `${mssg.menError}`, m)
console.log(`${mssg.menError2}`)
console.log(e)
handler.limit = false
}}
handler.help = ['', '2'].map(v => 'wallpaper' + v + ' <query>')
handler.tags = ['downloader']
handler.command = /^(wp|wallpaper2?)$/i
handler.register = true
handler.limit = 1
handler.level = 3
export default handler 

