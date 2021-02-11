const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('ffffff')
.setTitle(`${client.user.username} - Komutlarım`)
.setDescription(`
**\`Abone Rol Sistemi\`**
» \`${prefix}abone-istatistik\`: **Abone İstatiğini Gösterir**
» \`${prefix}abonesayısını-sıfırla\`: **Abone Sayısını Sıfırlar**
» \`${prefix}aboneyetkilisi-ayarla\`: **Abone Yetkilisi Ayarlar**
» \`${prefix}abonesistem-kapat\`: **Abone Sistemini Kapatır**
» \`${prefix}abonerol-ayarla\`: **Abone Rol Ayarlar**
» \`${prefix}abonekanal-ayarla\`: **Abone Kanal Ayarlar**
» \`${prefix}abone\`: **Abone Rolu Verir**
`)

.setThumbnail("https://cdn.discordapp.com/attachments/785821149580754954/786124655085748264/766653460988428308.gif")
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
  name: "abone-yardım",
  description: 'yardım kodu.',
  usage: 'yardım'
};