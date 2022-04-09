let moment = require('moment-timezone')
let fetch = require('node-fetch')
let wm = global.botwm
let logo = global.logo
let handler = m => m

handler.all = async function (m) {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.send3ButtonLoc(m.chat, logo, `
*hai, ${ucapan()}*

${user.banned ? 'kamu dibanned' : '𝙎𝙖𝙮𝙖 𝙖𝙙𝙖𝙡𝙖𝙝 𝙨𝙖𝙡𝙖𝙝 𝙨𝙖𝙩𝙪 𝘽𝙤𝙩 𝙒𝙝𝙖𝙩𝙨𝙖𝙥𝙥. 𝙃𝙖𝙧𝙖𝙥 𝙩𝙞𝙙𝙖𝙠 𝙨𝙥𝙖𝙢/𝙩𝙚𝙡𝙥𝙤𝙣/𝙢𝙚𝙢𝙞𝙣𝙩𝙖 𝙨𝙖𝙫𝙚 𝙠𝙚 𝙣𝙤𝙢𝙤𝙧 𝙞𝙣𝙞. 𝘼𝙙𝙖 𝙮𝙖𝙣𝙜 𝙗𝙞𝙨𝙖 𝙨𝙖𝙮𝙖 𝙗𝙖𝙣𝙩𝙪?Yang Dikembangkan Oleh wa.me/6288224465258'}
`.trim(), wm, user.register ? '⋮☰ Menu' : 'Verify', user.register ? '.menu' : `.daftar ${username}.13`, 'Rules', '.rules', 'Owner', '.owner', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari ☀️"
    if (time >= 4) {
        res = "Good Morning 🌄"
    }
    if (time > 10) {
        res = "Good Afternoon ☀️"
    }
    if (time >= 15) {
        res = "Good Afternoon 🌇"
    }
    if (time >= 18) {
        res = "Good Night 🌙"
    }
    return res
}
