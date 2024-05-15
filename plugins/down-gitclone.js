import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `${mssg.eGithub}`
if (!regex.test(args[0])) throw `${mssg.noValido} Github`
try {   
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`${mssg.espereArchivo}`)
conn.sendFile(m.chat, url, filename, null, m)
} catch (e) { 
await conn.reply(m.chat, `${mssg.menError}`, m)
console.log(`${mssg.menError2}`)
console.log(e)
handler.limit = 0
}}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone|clonarepo|clonarrepo|repoclonar/i
handler.limit = 2
handler.level = 3
handler.register = true
export default handler