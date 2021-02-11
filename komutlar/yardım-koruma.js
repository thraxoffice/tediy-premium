const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('ffffff')
.setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
.setDescription(`**[Davet Et](https://discord.com/api/oauth2/authorize?client_id=801088331890950164&permissions=8&scope=bot) | [Sitemiz](https://www.rylan.ml/) | [Destek Sunucusu](https://discord.gg/YCz5hF64w8) | [Youtube](https://www.youtube.com/channel/UCkCb5aCRW_3mEzpcPP18iVw?sub_confirmation=1)**

**__Gecikme Sürem__** **${client.ws.ping}**

**__Kullanıcı Sayısı__** **${client.guilds.cache.reduce((a,b) => a + b.memberCount,0).toLocaleString()}**

**\`Komutlarım\`**

\`${prefix}kanal-koruma\`
Sunucuyu Patlamadan Korur

\`${prefix}spam\`
Spam Koruma Sistemini Açar

\`${prefix}emoji-koruma\`
Emoji Koruma

\`${prefix}rol-koruma\`
Rol Koruma

\`${prefix}mod-log\`
Mod Log
`)
.setThumbnail(client.user.avatarURL())
.setTimestamp()
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "koruma",
  description: 'yardım kodu.',
  usage: 'yardım'
};