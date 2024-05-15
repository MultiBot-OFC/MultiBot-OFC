import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
if (!text) throw `${mssg.eTikTok3}\n*${mssg.botEjemplo} ${usedPrefix + command} Lol_Human*`
try {
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`
await conn.sendFile(m.chat, res, 'error.jpg', `${mssg.aquiImagen}`, m, false)
conn.reply(m.chat, `${mssg.botNombre}`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${mssg.botNombre}`, body: `${mssg.botDescrip}`, previewType: 0, thumbnail: multiMenu, sourceUrl: canal}}}) 
} catch (e) {
await conn.reply(m.chat, `${mssg.menError}`, m)
console.log(`${mssg.menError2}`)
console.log(e)
handler.limit = false
}}
handler.help = ['tiktokfoto'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(tiktokfoto|tiktokphoto)$/i
handler.limit = 1
handler.register = true
export default handler

