import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
  if (!text) throw `${mssg.eTexto} *Erika lundmoen - yad*`
	let res = await yts(text)
	let vid = res.videos[0]
	if (!vid) throw `No hay resultados, intenta con otro...`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid

	m.react('🔎') 
  let play = `
${mssg.playBordeA}
${mssg.playBordec}${mssg.Nombre}
${mssg.playBorded}${vid.title}

${mssg.playBordec}${mssg.Publicado}
${mssg.playBorded}${vid.ago}

${mssg.playBordec}${mssg.Duracion}
${mssg.playBorded}${vid.timestamp}
${mssg.playBordeB}`
 await conn.sendButton2(m.chat, play, mssg.botNombre, thumbnail, [
[mssg.playAudio, `${usedPrefix}dlav ${url}`],
[mssg.playVideo, `${usedPrefix}dlav2 ${url}`],
[mssg.playAudioDoc, `${usedPrefix}dlavdoc ${url}`],
[mssg.playVideoDoc, `${usedPrefix}dlavdoc2 ${url}`]
  ], null, [[mssg.botonCanal, `${michannel}`]], m)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']
handler.disabled = false

export default handler
