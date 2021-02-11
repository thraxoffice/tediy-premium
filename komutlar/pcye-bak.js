const Discord = require ("discord.js")

exports.run = async (client, message, args) => {
  
  var durumlar = [new Discord.MessageEmbed().setColor("RANDOM").setDescription("**Olamaz! Şarjın Yok Hemen Şarja Tak :/**"), new Discord.MessageEmbed().setColor("RANDOM").setDescription("**Bilgisayara Bakıyorsun... Discordu Açtın Ve https://discord.gg/FAchvKXF9r Bu Sunucuya Girdin**").setImage("https://i.giphy.com/media/l3vR85PnGsBwu1PFK/giphy.gif"), new Discord.MessageEmbed().setColor("RANDOM").setDescription("**Olamaz! Ekran Kartın Yandı Hemde **2060**dı Ağlıyorsun 5.000 TL Çöpe Gitti :/**")]
  var durum = durumlar[Math.floor(Math.random() * durumlar.length)];
  message.channel.send(durum)
    }



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bigisayarabak", "oyun-oyna", "oyunoyna", "bilgisayar"],
  permLevel: 0
}

exports.help = {
  name: "bilgisayara-bak",
  description: "Bilgisayara Bakarsınız..",
  usage: "-bilgisayara-bak"
}