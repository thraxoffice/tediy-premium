const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('ffffff')
.setTitle(`${client.user.username} - Komutlarım`)
.setDescription(`**\`Logo\`**
» \`${prefix}roket-logo\`: **Logo Yapar**
» \`${prefix}f-logo\`: **Logo Yapar**
» \`${prefix}imposter-logo\`: **Among Us Da Imposter Olursun**
» \`${prefix}clyde-logo\`: **Clyde Size Yazı Yazar**
`)
.setThumbnail("https://i.hizliresim.com/6xUANY.png")
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
  name: "logo-yardım",
  description: 'yardım kodu.',
  usage: 'yardım'
};