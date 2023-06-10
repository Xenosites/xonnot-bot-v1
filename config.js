import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6281255104397', 'Xenosites', true],
  ['6285656126947'], 
  ['6285718828566'] 
] //Numeros de owner 

global.mods = ['6281255104397'] 
global.prems = ['6281255104397', '6285656126947', '6285692195658']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'xonnotbotz' 
global.author = '@xenosites' 
global.fgig = '▢ Ikuti saya di Instagram \nhttps://www.instagram.com/nai.putri2\n' 
global.dygp = 'https://chat.whatsapp.com/GFvWy8hTOFM7a1gKOjJKLA'
global.fgsc = 'https://github.com/xynabotz' 
global.fgyt = 'http://youtube.com/@xenosites'
global.fgpyp = 'https://saweria.co/AraBotz'
global.fglog = 'https://i.ibb.co/tbHVZZ5/20230528-113117.png' 

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})