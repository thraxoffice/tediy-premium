const Discord = require("discord.js");

exports.run = (client, message, args) => {
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription("Üzgünüm **ADMINISTRATOR** Yetkin Yok")).then(m => m.delete({timeout: 5000}));
      if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription("Emoji ID'si Giriniz! ."));
      if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription("Emoji Adı Giriniz! (Boşluksuz)"));
      message.guild
        .emojis.create(`https://cdn.discordapp.com/emojis/${args[0]}`, args[1],{reason: 'Emoji Kopyalama Sistemi!' })
        .then(t => {
          message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription("Emoji Kopyalandı!"));
        })
        .catch(error => {
          message.channel.send("Hata oluştu!\n\n" + error);
        })

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emoji-çal"],
  permLevel: 0
};

exports.help = {
  name: "emoji-kopyala",
  description: "",
  usage: "emojikopyala"
};