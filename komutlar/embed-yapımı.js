const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('ffffff')
.setDescription(`

**const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('BAŞLIK')
    .setURL('URL')
    .setAuthor('BAŞLIĞIM ÜSTÜNDEKİ KISIM', 'RESMİ', 'GİDİLECEK URL')
    .setDescription('AÇIKLAMA')
    .setThumbnail('EMBED'IN ALTINA')
    .addField('EKSTRA ALAN'IN ADI', 'ALTINDAKİ METİN')
    .setImage('EKLENECEK FOTOĞRAF')
    .setTimestamp()
    .setFooter('EMBED'IN ALTINDAKİ KÜÇÜK METİN'')**

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
  name: "embed",
  description: 'yardım kodu.',
  usage: 'yardım'
};