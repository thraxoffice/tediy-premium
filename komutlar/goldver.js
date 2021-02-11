const Discord = require('discord.js');
const data = require('quick.db')
let ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => {
  ////--------------------------------------------\\\\       
  let prefix = ayarlar.prefix
  let sahip = '713831710885806125' //Premium verebilicek / alabilecek kişiler
  let log = client.channels.cache.get('807918902083977226') // logların tutulcağı kanal
  ////--------------------------------------------\\\\     
if(!args[0]) return message.channel.send(`Premium sisteminden yararlanmak için bot sahibinin sizin premiumunuzu aktif etmiş olması gerekiyor.
\`${prefix}premium\` \`kontrol\``)
////----------------------\\\\ PREMİUM KONTROL ////----------------------\\\\   
if(message.author.id !== sahip) {
  if(args[0] === 'kontrol') {
  let açıkmı = await data.fetch(`premium.${message.guild.id}`)  
  message.channel.send(new Discord.MessageEmbed()  
.setColor('RANDOM')
.setAuthor(message.guild.name, message.guild.iconURL)
.setDescription(`Bu sunucu için **Premium** sistemi **${açıkmı ? 'aktif' : 'kapalı'}**!`)
.setFooter(`Gelişmiş Premium Sistemi`)
.setTimestamp())   
}}
  ////----------------------\\\\ PREMİUM VER ////----------------------\\\\   
  if(args[0] === 'ver') {
  if(message.author.id !== sahip) return;
  ////----------------------\\\\ ID Boş ise ////----------------------\\\\   
  if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setDescription(`**Lütfen Bir Sunucunun ID'sini Gir.** \n**Örnek Kullanım: ?!premium ver 1232432423**`).setTimestamp().setTitle(`❌ Hata !`).setColor(`RED`))
  let id = args[1]
  if(isNaN(id)) return message.channel.send(new Discord.MessageEmbed().setDescription(`**Sadece sayı girebilirsin.**`).setTimestamp().setTitle(`❌ Hata !`).setColor(`RED`))
  ////----------------------\\\\ ID Kısa İse ////----------------------\\\\   
  if(id < 15) return message.channel.send(new Discord.MessageEmbed().setDescription(`**Girdiğin Rakam Bir Sunucunun ID'si Olmak İçin Çok Küçük.**`).setTimestamp().setTitle(`❌ Hata !`).setColor(`RED`))
  ////----------------------\\\\ ID bulunamaz ise ////----------------------\\\\   
  if(!client.guilds.cache.get(id)) return message.channel.send(new Discord.MessageEmbed().setDescription(`\`${id}\` **sunucusunu bulamıyorum.**`).setTimestamp().setTitle(`❌ Hata !`).setColor(`RED`))
  let açıkmı = await data.fetch(`premium.${id}`)
  if(açıkmı) return message.channel.send(new Discord.MessageEmbed().setDescription(`\`${id}\` **sunucusu için zaten premium aktif.**`).setTimestamp().setTitle(`❌ Hata !`).setColor(`RED`))
  ////----------------------\\\\ veritabanı ////----------------------\\\\     
  data.set(`premium.${id}`, 'açık')
  message.channel.send(new Discord.MessageEmbed().setDescription(`${client.guilds.cache.get(id).name} isimli sunucu için **PREMİUM** aktif edildi!`).setTimestamp().setTitle(`✅ Başarılı !`).setColor(`GREEN`))
  ////----------------------\\\\ Sunucu sahibi mesaj ////----------------------\\\\     
  let owner = client.guilds.cache.get(id).owner;
  owner.send(new Discord.MessageEmbed().setDescription(`**Merhaba** \`${owner.user.username}\`**!** \`${message.author.tag}\` **isimli kişi** \`${client.guilds.cache.get(id).name}\` **isimli sunucun için premium'u açtı.**`).setTimestamp().setTitle(`🔔 Bilgilendirme !`).setColor(`YELLOW`))
   ////----------------------\\\\ Log kanal mesaj ////----------------------\\\\    
    log.send(new Discord.MessageEmbed().setDescription(`\`${message.author.tag}\` **İsimli Yetkili** \n \`${owner.user.username}\` **Adlı Kişinin Sahip Olduğu** \n \`${client.guilds.cache.get(id).name}\` **isimli sunucun için premium'u açtı.**`).setTimestamp().setTitle(`🔔 Bilgilendirme !`).setColor(`YELLOW`)) 
  }
  ////----------------------\\\\ PREMİUM AL ////----------------------\\\\   
  if(args[0] === 'al') {
  if(message.author.id !== sahip) return;
     ////----------------------\\\\ ID Boş ise ////----------------------\\\\    
  if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bir sunucunun ID'sini girmeyi dene.`).setTimestamp().setTitle(`❌ Hata !`).setColor(`RED`))
  let id = args[1]
  if(isNaN(id)) return message.channel.send(new Discord.MessageEmbed().setDescription(`Sadece sayı girebilirsin.`).setTimestamp().setTitle(`❌ Hata !`).setColor(`RED`))
    ////----------------------\\\\ ID Kısa İse ////----------------------\\\\   
  if(id < 15) return message.channel.send(new Discord.MessageEmbed().setDescription(`Girdiğin rakam bir sunucunun ID'si olmak için çok küçük.`).setTimestamp().setTitle(`❌ Hata !`).setColor(`RED`))
   ////----------------------\\\\ ID bulunamaz ise ////----------------------\\\\   
 if(!client.guilds.cache.get(id)) return message.channel.send(new Discord.MessageEmbed().setDescription(`**${id}** sunucusunu bulamıyorum.`).setTimestamp().setTitle(`❌ Hata !`).setColor(`RED`))
  let açıkmı = await data.fetch(`premium.${id}`)
  if(!açıkmı) return message.channel.send(new Discord.MessageEmbed().setDescription(`**${id}** sunucusu için zaten premium aktif değil.`).setTimestamp().setTitle(`❌ Hata !`).setColor(`RED`))
    ////----------------------\\\\ veritabanı ////----------------------\\\\     
  data.delete(`premium.${id}`)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${client.guilds.cache.get(id).name} isimli sunucu için **PREMİUM** de-aktif edildi!`).setTimestamp().setTitle(`✅ Başarılı !`).setColor(`GREEN`))
    ////----------------------\\\\ Sunucu sahibi mesaj ////----------------------\\\\      
  let owner = client.guilds.cache.get(id).owner;
  owner.send(new Discord.MessageEmbed().setDescription(`**Merhaba** \`${owner.user.username}\`**!** \`${message.author.tag}\` **isimli kişi** \`${client.guilds.cache.get(id).name}\` **isimli sunucun için premium'u kapattı.**`).setTimestamp().setTitle(`🔔 Bilgilendirme !`).setColor(`YELLOW`))
     ////----------------------\\\\ Log kanal mesaj ////----------------------\\\\      
    log.send(new Discord.MessageEmbed().setDescription(`\`${message.author.tag}\` **isimli kişi** \n \`${owner.user.username}\` **Adlı Kişinin Sahip Olduğu** \n \`${client.guilds.cache.get(id).name}\` **isimli sunucun için premium'u kapattı.**`).setTimestamp().setTitle(`🔔 Bilgilendirme !`).setColor(`YELLOW`))
  }    
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}  

exports.help = {
  name: 'premium'
};