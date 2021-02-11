const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('ffffff')
.setTitle(`${client.user.username} - Komutlarım`)
.setURL('https://discord.gg/Sw5pd6YwyM')
.setDescription(`**\`Eylence\`**
» \`${prefix}aykut-elmas\`: **Aykut Elmas Sözü Atar**
» \`${prefix}dizi-öner\`: **Güzel Bir Dizi Önerir**
» \`${prefix}deprem-bilgi\`: **Depreme Yakalanan Herkese Allah Sabir Versin Amin**
» \`${prefix}burc-yorumu\`: **Günlük Burç Yorumu**
» \`${prefix}boks\`: **Boks Maçı**
» \`${prefix}abiniara\`: **Abini Ararsın**
» \`${prefix}tokatla\`: **Osmanlı Tokatı**
» \`${prefix}aşkölçer\`: **Aşk Ölçer**
» \`${prefix}fortnite\`: **Fortnite da Hesabınızın Bilgilerini Verir**
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
  name: "eğlence",
  description: 'yardım kodu.',
  usage: 'yardım'
};