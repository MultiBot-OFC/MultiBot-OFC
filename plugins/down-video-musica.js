import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
if (!text) throw `${mssg.eTexto} *${usedPrefix + command} Erika Lundmoen - yad*`
try { 
const yt_play = await search(args.join(' '))
const texto1 = `
¡¡Encontrado!!

TU TEXTO DE SIMILITUD:
• ${text}`.trim()
await conn.sendButton(m.chat, wm, texto1, yt_play[0].thumbnail, [[botonG, `${usedPrefix}reg MultiUser.18`]], null, null, m)

let listSections = [];             
listSections.push({
title: '🎬 𝙋𝙡𝙖𝙮 𝙈𝙪𝙡𝙩𝙞𝘽𝙤𝙩-𝙈𝘿 🔊',
rows: [
{ header: `${mssg.playVideo}`, title: `🎬 ${yt_play[0].title}`, id: `${usedPrefix}dlav ${yt_play[0].url}`, description: `MultiBot\n` },
{ header: `${mssg.playAudio}`, title: `🔊 ${yt_play[0].title}`, id: `${usedPrefix}dlav2 ${yt_play[0].url}`, description: `MultiBot\n` },
{ header: `${mssg.playVideoDoc}`, title: `🎬 ${yt_play[0].title}`, id: `${usedPrefix}dlavdoc ${yt_play[0].url}`, description: `MultiBot\n` },
{ header: `${mssg.playAudioDoc}`, title: `🔊 ${yt_play[0].title}`, id: `${usedPrefix}dlavdoc2 ${yt_play[0].url}`, description: `MultiBot\n` }
]});

await conn.sendList(m.chat, `*🍁 ${mssg.Nombre}*\n• *${text}*`, `\nMultiBot-OFC`, `VER LISTA`, listSections, {quoted: fkontak});
} catch (e) {
await conn.reply(m.chat, `${mssg.menError}`, m)
console.log(`${mssg.menError2}`)
console.log(e)
handler.limit = 0
}}
handler.command = ['play', 'play2', 'play3', 'play4']
//handler.limit = 3
//handler.register = true 
export default handler;

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
}
