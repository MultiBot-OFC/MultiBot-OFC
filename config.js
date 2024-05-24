import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*

global.owner = [['5218261275256', 'Creador', true], ['5492616532494', 'Creador 2', true]]

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*

global.imagen1 = fs.readFileSync("./media/img1.jpg")
global.imagen2 = fs.readFileSync("./media/img2.jpg")
global.imagen3 = fs.readFileSync("./media/img3.jpg")
global.imagen4 = fs.readFileSync("./media/img4.jpg")
global.imagen5 = fs.readFileSync("./media/img5.jpg")
global.imagen6 = fs.readFileSync("./media/img6.jpg")
global.imgAdv = fs.readFileSync("./media/Adv.jpg")

global.multiMenus = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8]

global.mods = []
global.prems = []
   
//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*

global.packname = `MultiBot-OFC`
global.author = 'Josue'
global.botname = 'MultiBot-OFC / Josue'
global.textbot = `Bot de WhatsApp version beta.`

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*

global.group = 'https://chat.whatsapp.com/I9LGemZUOAK5bbiHfcdcRx'
global.group2 = 'https://chat.whatsapp.com/EzI5ElGD1yz0bMxPLKa77C'
global.group3 = 'https://chat.whatsapp.com/I9LGemZUOAK5bbiHfcdcRx'
global.group4 = 'https://chat.whatsapp.com/JTj6OkGZ6exLnAIJkPqIgA'
global.group5 = 'https://chat.whatsapp.com/EzI5ElGD1yz0bMxPLKa77C'
global.canal = 'https://whatsapp.com/channel/0029Vaf8ZxlLdQelKKUUON22'

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Se actualizo 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
