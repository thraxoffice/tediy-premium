const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (!mesaj) return message.reply('Bana Birşeyler Yazdırmalısınki Embedlı Bir Şekilde Yazayım');
    message.delete();
    const embed = new Discord.MessageEmbed()
    .setColor(0xD97634)
    .setDescription(`**${mesaj}**`)
    return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yaz'],
  permLevel: 3
};

exports.help = {
  name: 'yaz',
  description: '',
  usage: 'yaz [mesaj]'
};