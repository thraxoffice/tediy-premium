const Discord = require("discord.js")
const fetch = require('node-fetch');

exports.run = async (client, message, args, db) => {
let date = await new Date()
var ay= (date.getMonth().toString().length == 1 ? date.getMonth().toString() + 1 : date.getMonth() + 1)
var gun = (date.getDate().toString().length == 1 ? "0" + date.getDate().toString() : date.getDate())
await fetch(`https://api.orhanaydogdu.com.tr/deprem/index.php?date=${date.getFullYear()}-${ay}-${gun}&limit=10`)
    .then(res => res.json())
    .then(json => {
let cikti = json.result
var efe = ""
  const embed = new Discord.MessageEmbed()
  .setAuthor("Türkiyedeki Son 10 Deprem")
    .setColor("#728bd6")
    .setThumbnail("https://upload.wikimedia.org/wikipedia/tr/0/0f/Kandilli_Rasathanesi_ve_Deprem_Ara%C5%9Ft%C4%B1rma_Enstit%C3%BCs%C3%BC_logosu.jpg")
    .setFooter(`Komut ${message.author.tag} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
for (const ayn of cikti) {
  embed.addField(`${ayn.lokasyon}`,` **Zaman:** ${ayn.date} **Büyüklük:** ${ayn.mag} - **Derinlik:** ${ayn.depth}km \n`)
}

  message.channel.send(embed)
})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["depremler","deprem-bilgi"],
  permLevel: 0,
  kategori: "bilgi"
};

exports.help = { 
	name: 'deprembilgi', 
  description: "Gün içerisinde olan son depremleri gösterir.",
  usage: 'deprembilgi'
}