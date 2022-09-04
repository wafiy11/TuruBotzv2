let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh🥱, Maap kak 𝖄𝖆𝖒𝖎𝕿𝖚𝖗𝖚 tadi ketiduran😊* ')
}

handler.tags = ['main']
handler.command = /^(puton)$/i

handler.admin = true

export default handler
