const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('ffffff')
.setTitle(`${client.user.username} - Komutlarım`)
.setDescription(`
**\`Müzik\`**
» \`${prefix}çal\`: **Müzik Açarsınız**
» \`${prefix}geç\`: **Şarkıyı Geçer**
» \`${prefix}durdur\`: **Şarkıyı Durdurusun**
» \`${prefix}sıralama\`: **Şarkı Sıralamasını Gösterir**
» \`${prefix}ses\`: **Şarkıdaki Sesi Ayarlarsın**

**\`Ne Mutlu Türküm Diyene\`**
» \`${prefix}15-temmuz çal/bitir\`: **Ne Mutlu Türküm Diyene!**
» \`${prefix}yaşasın-ırkımız çal/bitir\`: **Ne Mutlu Türküm Diyene!**
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
  name: "müzik-yardım",
  description: 'yardım kodu.',
  usage: 'yardım'
};