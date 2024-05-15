import Scraper from "@SumiFX/Scraper"

let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
let { women, man } = await Scraper.ppcouple("xd")
await conn.sendFile(m.chat, women, 'thumbnail.jpg', `Chica`, m)
await conn.sendFile(m.chat, man, 'thumbnail.jpg', `Chico`, m)
} catch {
}}
handler.help = ['ppcouple']
handler.tags = ['img']
handler.command = ['ppcouple', 'par']
handler.register = true 
//handler.limit = 1
export default handler