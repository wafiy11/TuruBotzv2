let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 Donasi • PIN Topup 」
│ • *MAXIS*: 60179317596
❏────
┌─「 Donasi • E Wallet 」
│ • Tng eWallet : 601158239004 (MOHAMMAD YUSUP)
❏────
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '📷 Instagram', url: sig}},
    {index: 2, urlButton: {displayText: '🌎 Official Group', url: sgc}},
    {index: 3, quickReplyButton: {displayText: 'Menu', id: '.menu'}},
    {index: 4, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
