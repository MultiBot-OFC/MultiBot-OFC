import yts from 'yt-search';
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    if (!text) throw `${mssg.eTexto} *${usedPrefix + command}* Erika lundmoen - yad`;
    m.react('🔎');
    
    let result = await yts(text);
    let ytres = result.videos;
    

    let listSections = [];
    for (let index in ytres) {
        let v = ytres[index];
        listSections.push({
            title: `${mssg.Nombre} ${v.title}`,
            rows: [
                {
                    header: mssg.playAudio,
                    title: "",
                    description: `*${mssg.Duracion}* ${v.timestamp}\n*${mssg.Vistas}* ${v.views}\n*${mssg.Nombre}* ${v.title}\n*${mssg.Publicado}* ${v.ago}\n`, 
                    id: `${usedPrefix}dlav ${v.url}`
                },
                {
                    header: mssg.playVideo,
                    title: "" ,
                    description: `*${mssg.Duracion}* ${v.timestamp}\n*${mssg.Vistas}* ${v.views}\n*${mssg.Nombre}* ${v.title}\n*${mssg.Publicado}* ${v.ago}\n`, 
                    id: `${usedPrefix}dlav2 ${v.url}`
                }
            ]
        });
    }

    await conn.sendList(m.chat, 'LISTA DE MÚSICA Y VIDEO', `\nResultados:\n*${text}*`, `Ver Lista`, ytres[0].image, listSections, m);
};

handler.help = ['play2']
handler.tags = ['dl']
handler.command = ['dlavlista', 'playlist', 'playlista'] 
handler.disabled = false

export default handler
