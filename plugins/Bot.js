const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/35883180004518cb15fe9.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `βΉπ₯ π‘οΈ DRAGONX π‘οΈ *πππΈ π»π°π½πΊπ° π±π΄ππ π.π° π±πΎπ* π₯βΉ 

π *Owner & Founder - Janith sadanuwan*

π *Language - NODE JS*

π§Ώ My name : π‘ Dragon x π‘\n\n\n\n β. Github - https://tinyurl.com/ycq7ra4x \n β. Youtube - https://tinyurl.com/yalqofqs \n β. Owner -https://tinyurl.com/y7evah34  \n β. Our Web - https://tinyurl.com/y7ul7kt4 \n\n β. All Cammands -Type .menu\n\n\nThank You For Using π‘ *Dragon x* π‘


`})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/35883180004518cb15fe9.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `βΉπ₯ π‘οΈ DRAGONX π‘οΈ *πππΈ π»π°π½πΊπ° π±π΄ππ π.π° π±πΎπ* π₯βΉ 
π *Owner & Founder - Janith sadanuwan*

π *Language - NODE JS*
        
π§Ώ My name : π‘ Dragon x π‘\n\n\n\n β. Github - https://tinyurl.com/ycq7ra4x \n β. Youtube - https://tinyurl.com/yalqofqs \n β. Owner -https://tinyurl.com/y7evah34  \n β. Our Web - https://tinyurl.com/y7ul7kt4 \n\n β. All Cammands -Type .menu\n\n\nThank You For Using π‘ *Dragon x* π‘
        
 `})
        


    }));
  
  Trex.addrex({pattern: 'bot', fromMe: false,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/35883180004518cb15fe9.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `βΉπ₯ π‘οΈ DRAGONX π‘οΈ *πππΈ π»π°π½πΊπ° π±π΄ππ π.π° π±πΎπ* π₯βΉ 

π    *Owner & Founder - Janith sadanuwan*

π    *Language - NODE JS*

π§Ώ My name : π‘ Dragon x π‘\n\n\n\n β. Github - https://tinyurl.com/ycq7ra4x \n β. Youtube - https://tinyurl.com/yalqofqs \n β. Owner -https://tinyurl.com/y7evah34  \n β. Our Web - https://tinyurl.com/y7ul7kt4 \n\n β. All Cammands -Type .menu\n\n\nThank You For Using π‘ *Dragon x* π‘

 `  ,quoted: message.data})

    }));
}