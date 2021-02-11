const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('ffffff')
.setAuthor('Bu komutu kullanan kullanıcı ' + message.author.tag)
.setDescription(`**[Davet Et](https://discord.com/api/oauth2/authorize?client_id=801088331890950164&permissions=8&scope=bot) | [Sitemiz](https://www.rylan.ml/) | [Destek Sunucusu](https://discord.gg/FAchvKXF9r) | [Youtube](https://www.youtube.com/channel/UCkCb5aCRW_3mEzpcPP18iVw?sub_confirmation=1)**

<a:BeratBulbulkrmzyldz:786584071248805898>  **__Gecikme Sürem__** **${client.ws.ping}** <a:BeratBulbulkrmzyldz:786584071248805898> 

<a:BeratBulbulkrmzyldz:786584071248805898>  **__Kullanıcı Sayısı__** **${client.guilds.cache.reduce((a,b) => a + b.memberCount,0).toLocaleString()}** <a:BeratBulbulkrmzyldz:786584071248805898> 

<a:BeratBulbulkrmzyldz:786584135762051103> __**Komutlarım**__ <a:BeratBulbulkrmzyldz:786584135762051103>

__**?!hesapkur**__ ᲼᲼᲼᲼᲼᲼ ᲼᲼᲼᲼᲼᲼ ᲼᲼᲼᲼᲼᲼ ᲼᲼᲼᲼᲼᲼ ᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼
İlk Önce Bu Komutu DENE

**?!çalış** ᲼᲼᲼᲼᲼᲼
Çalışır Ve Para Kazanırsın

**?!meslek** ᲼᲼᲼᲼᲼᲼
Meslek Seçersin (polis-doktor-muhabir)

**?!maaş** ᲼᲼᲼᲼᲼᲼
Maaşına Bakarsın

**?!param** ᲼᲼᲼᲼᲼᲼
Parana Bakarsın

**?!kumar** ᲼᲼᲼᲼᲼᲼
Kumar Oynarsın
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
  name: "ekonomi-yardım",
  description: 'yardım kodu.',
  usage: 'yardım'
};