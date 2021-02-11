const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 if (!message.member.hasPermission("MANAGE_NESSAGES")) return message.channel.send({embed: {color: "RED", description: "Bu komutu kullanamazsın!"}})

    message.delete()
      message.channel.send(
        new Discord.MessageEmbed()
        .setTitle(`Embed Oluşturma | 1/7`)
        .setDescription('Hangi kanala göndermemi istiyorsun?\nİptal etmek için \`iptal\` yazmanız yeterlidir.')
                      .setColor("RANDOM")
        );
      await startMessageCollectors(client, message, args);
      function startMessageCollectors(client, message, args) {
        let channelFilter = m => m.author.id === message.author.id;
        let channelCollector = new Discord.MessageCollector(message.channel, channelFilter, { max: 999 });
    
        channelCollector.on('collect', async msg => {
          let channel = await msg.mentions.channels.first();
          if (msg.content.toLowerCase() === 'iptal') {
                msg.channel.send('Embed oluşturma iptal edildi.')
            channelCollector.stop();
            return;
          }
          if (!channel) {
            await msg.channel.send('Bu geçerli bir kanal değil bu yüzden embed oluşturma iptal edildi.');
            await channelCollector.stop();
            return;
          } else {
            msg.channel.send(
              new Discord.MessageEmbed()
              .setTitle(`Embed Oluşturma | 2/7`)
              .setDescription(`Embed ${channel.toString()} kanalında paylaşılacak. Embed başlığı ne olsun?`)
                      .setColor("RANDOM")
            )
            channelCollector.stop();
          }
          let titleFilter = m => m.author.id === message.author.id;
          let titleCollector = new Discord.MessageCollector(message.channel, titleFilter, { max: 999 });
          titleCollector.on("collect", async msg => {
              let title = msg.content;
            if (msg.content.toLowerCase() === 'iptal') {
                msg.channel.send('Embed oluşturma iptal edildi.')
                channelCollector.stop();
                return;
              }
              if(!title) {
                  await msg.channel.send(`Başlık belirtmedin bu yüzden embed oluşturmayı iptal ettim.`)
                  await titleCollector.stop()
              } else {
                  msg.channel.send(
                      new Discord.MessageEmbed()
                      .setTitle(`Embed Oluşturma | 3/7`)
                      .setColor("RANDOM")
                      .setDescription(`Bu harika bir başlık! Embed rengi ne olsun?`)
                  )
                  titleCollector.stop()
              }
          let durationFilter = m => m.author.id === message.author.id;
          let durationCollector = new Discord.MessageCollector(message.channel, durationFilter, { max: 999 });
        durationCollector.on('collect', async msg => {
            let duration = msg.content;
            if (msg.content.toLowerCase() === 'iptal') {
              msg.channel.send('Embed oluşturma iptal edildi.')
              durationCollector.stop();
              return;
            } else {
              msg.channel.send(
                new Discord.MessageEmbed()
                      .setColor("RANDOM")
                .setTitle(`Embed Oluşturma | 4/7`)
                .setDescription(`Embed renigini ${duration} olarak ayarladım, Açıklama ne olsun?`)
                );
              durationCollector.stop();
            }
            let winnersFilter = m => m.author.id === message.author.id;
            let winnersCollector = new Discord.MessageCollector(message.channel, winnersFilter, { max: 999 });
        winnersCollector.on('collect', async msg => {
            let trueWinners = msg.content;

            if (msg.content.toLowerCase() === 'iptal') {
              msg.channel.send('Embed oluşturma iptal edildi.')
              winnersCollector.stop();
              return;
            } else {
              msg.channel.send(
                new Discord.MessageEmbed()
                      .setColor("RANDOM")
                .setTitle(`Embed Oluşturma | 5/7`)
                .setDescription(`Oh bu iyi bir açıklama! Altbilgi ne olsun?`)
                )
              winnersCollector.stop();
            }
            let prizeFilter = m => m.author.id === message.author.id;
            let prizeCollector = new Discord.MessageCollector(message.channel, prizeFilter, { max: 999 });
        prizeCollector.on('collect', async msg => {
            let prize = msg.content;
            if (msg.content.toLowerCase() === 'iptal') {
              msg.channel.send('Embed oluşturma iptal edildi.')
              prizeCollector.stop();
              return;
            }
            if (!prize) {
              await msg.channel.send(`Alt bilgi seçmedin!`)
              prizeCollector.stop();
              return;
            } else {
              msg.channel.send(
                new Discord.MessageEmbed()
                      .setColor("RANDOM")
                .setTitle(`Embed Oluşturma | 6/7`)
                .setDescription(`Güzel AltBilgi! Zaman damgası(timestamp) ister misin? İstiyorsan \`evet\` istemiyorsan, \`hayır\` yaz.`)
                );
              prizeCollector.stop();
            } 
            let timeFilter = m => m.author.id === message.author.id;
            let timeCollector = new Discord.MessageCollector(message.channel, timeFilter, { max: 999 });
            timeCollector.on("collect", async msg => {
                if (msg.content.toLowerCase() === 'iptal') {
                    msg.channel.send('Embed oluşturma iptal edildi.')
                    prizeCollector.stop();
                    return;
                  }
                  if (msg.content.toLowerCase() === "evet") {
                    await msg.channel.send(
                        new Discord.MessageEmbed()
                      .setColor("RANDOM")
                        .setTitle(`Başarılı!`)
                        .setDescription(`Zaman damgası ayarlandı. Embed ${channel.toString()} kanalına gönderildi.`)
                    )
                    timeCollector.stop()
                    const embed2 = new Discord.MessageEmbed()
                    .setTitle(title)
                    .setColor(duration)
                    .setDescription(trueWinners)
                    .setFooter(prize)
                    .setTimestamp()
                    message.guild.channels.cache.get(channel.id).send(embed2)
                  } else if(msg.content.toLowerCase() === "hayır"){
                    msg.channel.send(
                      new Discord.MessageEmbed()
                      .setColor("RANDOM")
                      .setTitle("Başarılı!")
                      .setDescription(`Zaman damgası oluşturulmadı. Embed ${channel.toString()} kanalına gönderildi.`)
                      );
                      const embed = new Discord.MessageEmbed()
                      .setTitle(title)
                      .setColor(duration)
                      .setDescription(trueWinners)
                      .setFooter(prize)
                      message.guild.channels.cache.get(channel.id).send(embed)
                    timeCollector.stop();
                  }
            })
    })
})
    })
})
        })
     
}
}

exports.conf = {
    aliases: []
}

exports.help = {
    name: "embed-oluştur",
    descripiton: "embed oluşturursunuz.",
    usage: "embed-oluştur"
}