>import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//•─• ⏣ •─•═════════• ⧋ •═════════•─• ⏣ •─•

global.owner = [
  ['5218261275256', 'おDanịel.xyz⁩', true],
  ['5492616532494', 'Samuel Fts', true],
  ['51910108980'],
  ['5218139760662'],
  ['5218132588591'],
  ['5218261275256'],
  ['5218261009198'],
  ['50662333781'],
  ['5218261000681']

]

//•─• ⏣ •─•═════════• ⧋ •═════════•─• ⏣ •─•

global.mods = []
global.prems = []
   
//•─• ⏣ •─•═════════• ⧋ •═════════•─• ⏣ •─•

global.wm = `𝙈𝙪𝙡𝙩𝙞𝘽𝙤𝙩-𝙈𝘿`
global.packname = `Sumi Sakurasawa - MD`
global.author = 'おDanịel.xyz'
global.botname = 'Sumi Sakurasawa - MD'
global.textbot = `© 2024 Starlights Team | All rights reserved`

//•─• ⏣ •─•═════════• ⧋ •═════════•─• ⏣ •─•

global.img = 'https://telegra.ph/file/5ac99cf6f4116d46b989a.jpg'
global.img2 = 'https://telegra.ph/file/e3c97f8d59f25ea8166c9.jpg'
global.img3 = 'https://telegra.ph/file/b8391fd0df9d53edbedf8.jpg'
global.img4 = 'https://telegra.ph/file/756f765e4662ba083c20e.jpg'
global.img5 = 'https://telegra.ph/file/46866f1e6c8073df8a035.jpg'

global.multiImg = [img, img2, img3, img4, img5]
//•─• ⏣ •─•═════════• ⧋ •═════════•─• ⏣ •─•

global.group = 'https://chat.whatsapp.com/DaZrhN5469XDs6lBNmcdOO'
global.group2 = 'https://chat.whatsapp.com/DavHccRC8t64mUUQXK4OrU'
global.group3 = 'https://chat.whatsapp.com/GFqGm6fI8ANDaIVZ2mQciQ'
global.group4 = 'https://chat.whatsapp.com/CqdWTXmS702JD31SQzr0Ph'
global.group5 = 'https://chat.whatsapp.com/G0JPb1IvBwUDVFqm5YUiGA'
global.canal = 'https://whatsapp.com/channel/0029VaBfsIwGk1FyaqFcK91S'

//•─• ⏣ •─•═════════• ⧋ •═════════•─• ⏣ •─•

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

//•─• ⏣ •─•═════════• ⧋ •═════════•─• ⏣ •─•

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

//•─• ⏣ •─•═════════• ⧋ •═════════•─• ⏣ •─•

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Se actualizo 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
