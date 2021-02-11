const Discord = require("discord.js");
const ffmpeg = require("ffmpeg");
const ytdl = require('ytdl-core');
exports.run = function (client, message, args) {
		let value = args.slice(0).join(' ');
    if(!value) {
	    message.reply("https://tenor.com/view/15temmuz-add-gif-14524922")
    }		
    if (!message.member.voice.channel) return message.reply("**https://tenor.com/view/15temmuz-add-gif-14524922**");
		    if (value === "çal") {
        if (message.member.voice.channel.join()
        .then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=2VUeUp0o8Zw', { filter: 'audioonly' })
            const dispatcher = connection.play(stream)
        }));
          const turk = new Discord.MessageEmbed()
          .setTitle('Ne mutlu Türküm diyene!')
          .setImage('https://tenor.com/view/15temmuz-add-gif-14524922')
          return message.channel.send(turk)
          return;
    };
	if (value === "bitir") {
      message.channel.send("3 saniye içinde kanaldan ayrılıyorum...").then(m => {
        setTimeout(()=>{
          m.edit("**Ayrıldım!**")
        }, 2800)
      })
      setTimeout(()=>{
        const voiceChannel = message.member.voice.channel;
        voiceChannel.leave()
      }, 3000)
	}
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};
exports.help = {
    name: "yaşasın-ırkımız",
    description: "15 Temmuz Marşı'nı çalar.",
    usage: "15-temmuz"
};