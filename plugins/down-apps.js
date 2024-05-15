import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix, command, text}) => {
if (!text) throw `${mssg.eTexto} WhatsApp`;
try {    
const searchA = await search(text);
const data5 = await download(searchA[0].id);
let response = `
${mssg.playBordeA}
${mssg.playBordec}${mssg.Nombre}
${mssg.playBorded}${data5.name}

${mssg.playBordec}${mssg.Paquete}
${mssg.playBorded}${data5.package}

${mssg.playBordec}${mssg.Actualizacion}
${mssg.playBorded}${data5.lastup}

${mssg.playBordec}${mssg.Peso}
${mssg.playBorded}${data5.size}
${mssg.playBordeB}`
await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
return await conn.sendMessage(m.chat, {text: mssg.pesoAlto}, {quoted: m})}
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m}); 
} catch (e) {
await conn.reply(m.chat, `${mssg.menError}`, m)
console.log(`${mssg.menError2}`)
console.log(e)
handler.limit = false
}};
handler.command = /^(apkmod|apk|modapk|dapk2|aptoide|aptoidedl)$/i;
handler.register = true
handler.limit = 2
export default handler;
