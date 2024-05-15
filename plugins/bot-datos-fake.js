let handler = async (m, { conn, usedPrefix, text }) => {
  let { key } = await conn.sendMessage(m.chat, { text: "Descargando datos..." }, { quoted: m });
  const array = [
    "『🔄』▰▱▱▱▱▱",
    "『🔄』▱▰▱▱▱▱",
    "『🔄』▱▱▰▱▱▱",
    "『🔄』▱▱▱▰▱▱",
    "『🔄』▱▱▱▱▰▱",
    "『🔄』▱▱▱▱▱▰",
    "『🆗』▰▱▱▱▱▱",
    "『🔄』▱▰▱▱▱▱",
    "『🔄』▱▱▰▱▱▱",
    "『🔄』▱▱▱▰▱▱",
    "『🔄』▱▱▱▱▰▱",
    "『🔄』▱▱▱▱▱▰",
    "『🔄』▰▱▱▱▱▱",
    "『🔄』▱▰▱▱▱▱",
    "『🔄』▱▱▰▱▱▱",
    "『🔄』▱▱▱▰▱▱", 
    "『🔄』▱▱▱▱▰▱",
    "『🔄』▱▱▱▱▱▰", 
    "『🔄』▰▱▱▱▱▱",
    "『🔄』▱▰▱▱▱▱",
    "『🔄』▱▱▰▱▱▱",
    "『🔄』▱▱▱▰▱▱"
  ];

  for (let item of array) {
    await conn.sendMessage(m.chat, { text: `${item}`, edit: key }, { quoted: m });
    await new Promise(resolve => setTimeout(resolve, 20)); // Delay 5 seconds
  }
  return conn.sendMessage(m.chat, { text: `Datos descargados: #update`.trim() , edit: key, mentions: [m.sender] }, { quoted: m });
};

handler.help = ['pajeame'];
handler.tags = ['fun'];
handler.command = /^(sega|pajeame|fap)$/i;

export default handler;