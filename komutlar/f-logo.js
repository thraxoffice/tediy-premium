const Discord = require("discord.js");
const ayarlar = require("../botlar.json")
exports.run = (client, message, args) => {
  const botlar = ayarlar.botadi

let logoaltyap = args.slice(0).join("+");
if (!logoaltyap) return message.channel.send("Lütfen Bişey Yaz");
let link="https://dynamic.brandcrowd.com/asset/logo/8feae121-2381-4a22-82e4-a242abcc25da/logo?v=4&text=" + logoaltyap;

const logobotaltyapi = new Discord.MessageEmbed()
.setTitle(`${botlar} F-Logosu`)
.setImage(link)
.setFooter(`${botlar} F-logosu`)
return message.channel.send(logobotaltyapi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "f-logo"
};
