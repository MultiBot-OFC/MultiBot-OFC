
import fetch from 'node-fetch';
export async function before(m, { conn }) {
   let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.ibb.co/1ZxrXKJ/avatar-contact.jpg');

  let nam = "🤖 𝘼𝙣𝙩𝙞 𝙎𝙪𝙗 𝘽𝙤𝙩𝙨 🤖"
  global.rpl = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }, 
      externalAdReply: {
        mediaUrl: bgp,
        mediaType: 'VIDEO',
        description: 'support group',
        title: packname,
        body: 'grupo de soporte',
        thumbnailUrl: pp,
        sourceUrl: canal
      }
    }
  };
  global.rcanal = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }, 
      externalAdReply: {
        mediaUrl: fgcanal,
        mediaType: 'VIDEO',
        description: 'canal del grupo',
        title: packname,
        body: 'Canal de Oficial',
        thumbnailUrl: pp,
        sourceUrl: canal
      }
    }
  }
  global.fwc = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }
    }
  }
  global.rpyp = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }, 
      externalAdReply: {
        mediaUrl: fgpyp,
        mediaType: 'VIDEO',
        description: 'Donate',
        title: 'PayPal',
        body: 'ayuda a mantener el bot activo',
        thumbnailUrl: pp,
        sourceUrl: canal
      }
    }
  };
  global.rpig = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }, 
      externalAdReply: {
        mediaUrl: fgig,
        mediaType: 'VIDEO',
        description: 'Sigueme por Instagram',
        title: 'Instagram',
        body: 'sigueme por Instagram',
        thumbnailUrl: pp,
        sourceUrl: canal
      }
    }
  };
  global.rpyt = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }, 
      externalAdReply: {
        showAdAttribution: true,
        mediaUrl: fgyt,
        mediaType: 'VIDEO',
        description: 'Suscribete: ' + fgyt,
        title: 'YouTube',
        body: 'aprende a crear tus propios bots',
        thumbnailUrl: pp,
        sourceUrl: canal
      }
    }
  }
  
  
  
}
