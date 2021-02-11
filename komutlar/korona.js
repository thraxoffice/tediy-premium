const Discord = require("discord.js")
const track = require('novelcovid');


exports.run = async (client, message, args) => {
   track.all().then(data => {
    const embed = new Discord.MessageEmbed()
      .addField("Toplam Vaka", data.cases)
      .addField("Toplam Ölen", data.deaths)
      .addField("Toplam İyileşen", data.recovered)
      .setFooter("Bu bilgiler Dünya Genelindeki bilgilerdir!");
    message.channel.send(embed);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
name: 'corona'
};