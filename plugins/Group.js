const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'grp', fromMe: true,  deleteCommand: true }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/35883180004518cb15fe9.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      πβ GROUP LIST βπ\n\nπ²οΈ  GROUP  π²οΈ \n\n π± ' + Config.GROUPN1 + ' π±\n\n\n       βπ‘οΈ  αͺαπ°πΆππ ΣΌ   π‘οΈβ '})

    }));
  
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'grp', fromMe: true,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/35883180004518cb15fe9.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      πβ GROUP LIST βπ\n\nπ²οΈ  GROUP  π²οΈ \n\n π± ' + Config.GROUPN1 + ' π±\n\n\n       βπ‘οΈ  αͺαπ°πΆππ ΣΌ   π‘οΈβ '})

    }));
  
  Trex.addrex({pattern: 'grp', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/35883180004518cb15fe9.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      πβ GROUP LIST βπ\n\nπ²οΈ  GROUP  π²οΈ \n\n π± ' + Config.GROUPN1 + ' π±\n\n\n       βπ‘οΈ  αͺαπ°πΆππ ΣΌ   π‘οΈβ    ' ,quoted: message.data})

    }));
 
}
