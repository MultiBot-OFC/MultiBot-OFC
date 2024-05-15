let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${wm}⁩;;\nFN:${wm}⁩\nORG:${wm}⁩\nTITLE:\nitem1.TEL;waid=5218261275256:5218261275256\nitem1.X-ABLabel:${wm}⁩\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:${wm}⁩\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'おDanịel.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler