const Trex = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const Ln = "  *SEND GN GM Wish With Image* "

 if (Config.WORKTYPE == 'public') {
  
  Trex.addrex({ pattern: 'gm', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/b61c06d757b20d1bdfcee.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'šš¶ššš š»ššššššš š„°\ną·ą·ą¶¶ ą¶Æą·ą·ą¶ą· ā  ą·ą¶­ą·ą¶§ą·ą¶±ą· ą¶ą¶±ą·ą¶± š'  ,quoted: message.data})

    }));
  
  Trex.addrex({ pattern: 'gn', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/1cff5bcdec0dcd5708ff5.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'šįįŖįŖį šįįįį¼į¢ š«āØ\n\ną·ą·ą¶¶ ą¶»ą·ą¶­ą·āą¶»ą·ą¶ŗą¶ą· ā  ą·ą·ą¶Æą¶§ ą¶±ą·ą¶Æą·ą¶ą¶±ą·ą¶± ą·ą·ą¶Æą· š¤­'  ,quoted: message.data})

    }));
 
  Trex.addrex({ pattern: 'gn', fromMe: true, dontAddCommandList: false }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/1cff5bcdec0dcd5708ff5.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'šįįŖįŖį šįįįį¼į¢ š«āØ\n\ną·ą·ą¶¶ ą¶»ą¶­ą·āą¶»ą·ą¶ŗą¶ą· ā  ą·ą·ą¶Æą¶§ ą¶±ą·ą¶Æą·ą¶ą¶±ą·ą¶± ą·ą·ą¶Æą· š¤­' })
    
    }));
 
 Trex.addrex({ pattern: 'gm', fromMe: true, dontAddCommandList: false }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/b61c06d757b20d1bdfcee.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'šš¶ššš š»ššššššš š„°\n\ną·ą·ą¶¶ ą¶Æą·ą·ą¶ą· ā  ą·ą¶­ą·ą¶§ą·ą¶±ą· ą¶ą¶±ą·ą¶± š' })

    }));
   }
else if (Config.WORKTYPE == 'private') {
 
 Trex.addrex({ pattern: 'gn', fromMe: true, dontAddCommandList: false }, (async (message, match) => {

        if (match[1] ==='' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/1cff5bcdec0dcd5708ff5.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'šįįŖįŖį šįįįį¼į¢ š«āØ\n\ną·ą·ą¶¶ ą¶»ą¶­ą·āą¶»ą·ą¶ŗą¶ą· ā  ą·ą·ą¶Æą¶§ ą¶±ą·ą¶Æą·ą¶ą¶±ą·ą¶± ą·ą·ą¶Æą· š¤­' })

    

    }));

 
 

 Trex.addrex({ pattern: 'gm', fromMe: true, dontAddCommandList: false }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/b61c06d757b20d1bdfcee.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'šš¶ššš š»ššššššš š„°\n\ną·ą·ą¶¶ ą¶Æą·ą·ą¶ą· ā  ą·ą¶­ą·ą¶§ą·ą¶±ą· ą¶ą¶±ą·ą¶± š' })

    }));
 }
