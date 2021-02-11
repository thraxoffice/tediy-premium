const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('ffffff')
.setTitle(`${client.user.username} - Renk Kodlarım`)
.setDescription(`
**Renk**: __**Siyah**__ : #000000

**Renk**: __**Mavi**__ : #0000FF

**Renk**: __**Yeşil**__ : #00FF00

**Renk**: __**Kırmızı**__ : #FF0000

**Renk**: __**Sarı**__ : #FFFF00

**Renk**: __**Açık Mavi**__ : #00FFFF

**Renk**: __**Pembe**__ : #FF00FF

**Renk**: __**Gri**__ : #C0C0C0

**Renk**: __**Beyaz**__ : #FFFFFF
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
  name: "renk-yardım",
  description: 'yardım kodu.',
  usage: 'yardım'
};