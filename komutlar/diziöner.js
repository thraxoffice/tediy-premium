const virus = require("discord.js");

exports.run = async (client, message, args) => {

  if (!args[0]) {
    const hata = new virus.MessageEmbed()
      .setColor("GREEN")
      .setTitle("Doğru Kullanım:")
      .setDescription(`
      - ?!dizi-öner aksiyon

      - ?!dizi-öner korku
      
      - ?!dizi-öner bilimkurgu
      `)
    message.channel.send(hata);
  }
// korku
  if (args[0] === "aksiyon") {
    var aksdizi = [
      "**La Casa De Papel**"

  ]
     var aksiyondata = aksdizi[Math.floor(Math.random() * (aksdizi.length))]
    const aksiyon = new virus.MessageEmbed()
    .setColor("GREEN")
    .setTitle("İşte Sana Önderdiğim Dizi:")
    .setDescription(`${aksiyondata}`)
    message.channel.send(aksiyon);
  }
// kurgu
  if (args[0] === "korku") {
    var krkdata = [
      "**IT** Palyoça adam",
      "**#ALIVE** Koreliler zombi",
      "**Countdown** Ne zaman öleceğini biliyosun"
       ]
     var korkudata = krkdata[Math.floor(Math.random() * (krkdata.length))]
    const korku = new virus.MessageEmbed()
    .setColor("GREEN")
    .setTitle("İşte Sana Önderdiğim Dizi:")
    .setDescription(`${korkudata}`)
    message.channel.send(korku);
  }
// bilim kurgu
  if (args[0] === "bilimkurgu") {
    var blmdata = [
      "**Stranger Things** Lan noluyo lan",
      "**The Rain** Yağmur yağıyo ama değen ölüyo"
      ]
     var blmkrgdata = blmdata[Math.floor(Math.random() * (blmdata.length))]
    const blmkurgu = new virus.MessageEmbed()
    .setColor("GREEN")
    .setTitle("İşte Sana Önderdiğim Dizi:")
    .setDescription(`${blmkrgdata}`)
    message.channel.send(blmkurgu);
  }
///////////////////////////
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["dizi-öner"],
  permLevel: 0
};

exports.help = {
  name: "diziöner"
};