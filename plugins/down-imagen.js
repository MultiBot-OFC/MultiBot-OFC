import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mssg.eTexto} Minecraft` 
try {
const json = await pinterest(text)
conn.sendButton(m.chat, `${wm}`, `${mssg.aquiImagen}`, json.getRandom(), [
[mssg.botonA, `${usedPrefix}pinterest ${text}`],
[mssg.botonC, `#menu`], null, null, m)

} catch (e) {
console.log(`${mssg.menError2}`)
console.log(e)
handler.money = false
}}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest|dlpinterest|pinterestdl)$/i
handler.money = 2
export default handler