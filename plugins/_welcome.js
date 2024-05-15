import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => './src/https://telegra.ph/file/756f765e4662ba083c20e.jpg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]
  let fake = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5491133978270-5493873687620@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   }}}

  if (chat.welcome && m.messageStubType == 27) {
    let welcome = `•۟─𝆭─۟─𝆭─۫─𝆭─ۧ─•۟໑𝆬⧐ 𝆹𝅥 ⧏𝆬໑•۫─𝆭─𝆬─۫─𝆭─𝆬─𝆭─•\n╭• 𝆹𝅥⥿𝆭🍂𝆺𝅥⬪𝆭𝘽۪𝙄𝆭𝙀࣭𝆬𝙉࣭𝆬𝙑𝙀۪𝆭𝙉࣭𝙄𝘿࣭𝆭𝙊/۪𝆬𝘼𝆭ꥈ⬪𝆺𝅥🍂𝆭⥿𝆹𝅥\n╰• ‹ @${m.messageStubParameters[0].split`@`[0]} ›\n~•                  •ᵐᵘˡᵗⁱ ᵇᵒᵗ ᵐᵈ•                  •~\n╭•『 𝙂𝙍𝙐𝙋𝙊 / 𝙂𝙍𝙊𝙐𝙋 』\n╰• ‹${groupMetadata.subject}›\n•۟─𝆭─۟─𝆭─۫─𝆭─ۧ─•۟໑𝆬⧐ 𝆺𝅥 ⧏𝆬໑•۫─𝆭─𝆬─۫─𝆭─𝆬─𝆭─•`
  await conn.Sumi(m.chat, botname, welcome, img, img, canal, fake)
  }
  
  if (chat.welcome && m.messageStubType == 28) {
    let bye = `•۟─𝆭─۟─𝆭─۫─𝆭─ۧ─•۟໑𝆬⧐ 𝆹𝅥 ⧏𝆬໑•۫─𝆭─𝆬─۫─𝆭─𝆬─𝆭─•\n╭• 𝆹𝅥⥿𝆭🪸𝆺𝅥⬪𝘼𝘿𝆭𝙄𝙊𝙎𝆭 /𝅦 𝘽𝆭𝙔𝙀𝅦⬪𝆺𝅥🪸𝆭⥿𝆹𝅥\n╰• ‹ @${m.messageStubParameters[0].split`@`[0]} ›\n~•                  •ᵐᵘˡᵗⁱ ᵇᵒᵗ ᵐᵈ•                  •~\n╭•『 𝙈𝙪𝙡𝙩𝙞𝘽𝙤𝙩-𝙈𝘿 』\n╰• ‹🙂‍↔ 𝙐𝙣 𝙛𝙖𝙣𝙩𝙖𝙨𝙢𝙖 𝙥𝙚𝙧𝙫𝙚𝙧𝙩𝙞𝙙𝙤 𝙢𝙚𝙣𝙤𝙨›\n•۟─𝆭─۟─𝆭─۫─𝆭─ۧ─•۟໑𝆬⧐ 𝆺𝅥 ⧏𝆬໑•۫─𝆭─𝆬─۫─𝆭─𝆬─𝆭─•`
  await conn.Sumi(m.chat, botname, bye, img, img, canal, fake)
  }
  
  if (chat.welcome && m.messageStubType == 32) {
    let kick = `•۟─𝆭─۟─𝆭─۫─𝆭─ۧ─•۟໑𝆬⧐ 𝆹𝅥 ⧏𝆬໑•۫─𝆭─𝆬─۫─𝆭─𝆬─𝆭─•\n╭• 𝆹𝅥⥿𝆭🪸𝆺𝅥⬪𝘼𝘿𝆭𝙄𝙊𝙎𝆭 /𝅦 𝘽𝆭𝙔𝙀𝅦⬪𝆺𝅥🪸𝆭⥿𝆹𝅥\n╰• ‹ @${m.messageStubParameters[0].split`@`[0]} ›\n~•                  •ᵐᵘˡᵗⁱ ᵇᵒᵗ ᵐᵈ•                  •~\n╭•『 𝙈𝙪𝙡𝙩𝙞𝘽𝙤𝙩-𝙈𝘿 』\n╰• ‹🙂‍↔ 𝙐𝙣 𝙛𝙖𝙣𝙩𝙖𝙨𝙢𝙖 𝙥𝙚𝙧𝙫𝙚𝙧𝙩𝙞𝙙𝙤 𝙢𝙚𝙣𝙤𝙨›\n•۟─𝆭─۟─𝆭─۫─𝆭─ۧ─•۟໑𝆬⧐ 𝆺𝅥 ⧏𝆬໑•۫─𝆭─𝆬─۫─𝆭─𝆬─𝆭─•`
  await conn.Sumi(m.chat, botname, kick, img, img, canal, fake)
  }
}