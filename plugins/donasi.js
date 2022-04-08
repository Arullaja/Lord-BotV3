let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 082130295912
│┝‷✧ *Dana:* 0882001113526
│┝‷✧ *Ovo:* 081310312459
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6288224465258?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm
