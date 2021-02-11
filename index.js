const discord = require("discord.js");
const fs = require("fs");
const http = require("http");
const db = require("quick.db");
const moment = require("moment");
const express = require("express");
const ayarlar = require("./ayarlar.json");
const exports = require("exports");
const canvas = require("canvas");
let prefix = "?!";
const dbd = require("dbd.js")
const app = express();
app.get("/", (request, response) => {
  console.log(`7/24 Hizmet Vermekteyim!`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//READY.JS
const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", async () => {
  client.appInfo = await client.fetchApplication();
  setInterval(async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);

  client.user.setActivity(`Rylan - 7/24 - Hızlı - Güvenli `, { type: "PLAYING" });

  console.log("W4ldo | Abone Ol");
  client.user.setStatus("dnd");
});

const log = message => {
  console.log(` ${message}`);
};
require("./util/eventLoader.js")(client);

//READY.JS SON

//KOMUT ALGILAYICI

client.on('message', async message => {
if (message.content === 'fakekatıl') { // Buraya ne yazarsanız yazdığınız şeye göre çalışır
  client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
    }
});

client.on('message', async message => {
if (message.content === 'fakeayrıl') { // Buraya ne yazarsanız yazdığınız şeye göre çalışır
  client.emit('guildMemberRemove', message.member || await message.guild.fetchMember(message.author));
    }
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};




const bot = new dbd.Bot({
token:"",
prefix:"?!"
}) //Login the Bot to Discord using Your Bot Token
bot.onMessage()//Events for Commands to run
bot.command({
name:"ping", //The command name,
code:"$ping ms" // The command code
})

bot.variables({
   lengel:"",
   ototaglog:"",
   ototag:"",
   para:"0",
   hesap:"yok",
   meslek:"işsiz",
   kanal:"yok",
   arol:"yok",
   vrol:"yok",
   dmkod:"",
   yasak:"",
   mrol:"yok",
   level:"0",
   rank:"kapalı",
   xp:"0",
   sxp:"500",
   hex:""
  })

bot.command({
  name:"sıralama",
  code:`
  $color[RANDOM]
  $author[İlk 10 Çalan Şarkı]
  $description[
  $queue[1;10;{number} - {title}]]
  $suppressErrors[Şuanda Bir Şey Çalmıyor]`
  
  })

bot.command({
    name: "durdur",
    code: `
    $color[00ff51]
$author[Şarkı Durduruldu;https://cdn.discordapp.com/attachments/778283166418468887/781477935651487784/durdur-removebg-preview.png]
$pauseSong

$onlyIf[$voiceID!=;Ses Kanalına Girmelisin]

$suppressErrors[Müzik Çalmıyor Nasıl Durdurayım?]`
    
  })

bot.command({
    name: "ses",
    code: `
    $color[00ff51]
$author[Ses $message Olarak Ayarlandı;https://cdn.discordapp.com/attachments/778283166418468887/781473098750885888/ses-removebg-preview.png]
$volume[$message]
$onlyIf[$isNumber[$message]!=false;Girdiğin Bir Rakam Değil]
$onlyIf[$voiceID!=;Ses Kanalına Girmelisin]
$onlyIf[$message!=;Bir Müzik İsmi Girmelisin]
$suppressErrors[Müzik Çalmıyor Nasıl Ses Vereyim?]`
    
    })

bot.command({
    name: "geç",
    code: `
$color[00ff51]
$author[Şarkı Geçildi;https://cdn.discordapp.com/attachments/778283166418468887/781479960296685598/atla-removebg-preview.png]
$skipSong
$description[Geçilen Müzik [$songInfo[title]\\]($songInfo[url])]
$onlyIf[$voiceID!=;Ses Kanalına Girmelisin]
$suppressErrors[Müzik Çalmıyor Nasıl Geçeyim ?]`
    })




bot.command({
        name: "çal",
        code: `$color[00ff51]
$author[Müzik Çalınıyor;https://e7.pngegg.com/pngimages/784/381/png-clipart-white-and-red-musical-note-logo-text-symbol-brand-music-text-trademark.png]
$description[Şuanda Oynatılan Müzik **$songInfo[title]**
Müzik Uzunluğu **$songInfo[duration]** Saniyedir.

Müzik Linki $songInfo[url]
Sıradaki Müzik Sayısı: $queueLength]
$footer[Müziği Çalan Kişi $username;$authorAvatar]
$playSong[$message;Böyle bir müzik bulamadım tekrar denermisin]
$onlyIf[$voiceID!=;Ses Kanalına Girmelisin]
$onlyIf[$message!=;Bir Müzik İsmi Girmelisin]`
})




client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};


client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

//KOMUT ALGILAYICI SON

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip,ayarlar.sahip2,ayarlar.coder) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bg#27167A.green(e.replace(regToken, 'that was redacted')));
// });



client.login(ayarlar.token);

//-----------------------KOMUTLAR-----------------------\\
client.on("channelDelete", async function(channel) {
    let rol = await db.fetch(`kanalk_${channel.guild.id}`);
  
  if (rol) {
const guild = channel.guild.cache;
let channelp = channel.parentID;

  channel.clone().then(z => {
    let kanal = z.guild.channels.find(c => c.name === z.name);
    kanal.setParent(
      kanal.guild.channels.find(channel => channel.id === channelp)
      
    );
  });
  }
})
//-----------------------KOMUTLAR-----------------------\\
client.on("guildMemberRemove", async member => {
  //let resimkanal = JSON.parse(fs.readFileSync("./ayarlar/gç.json", "utf8"));
  //const canvaskanal = member.guild.channels.cache.get(resimkanal[member.guild.id].resim);
  
  if (db.has(`gçkanal_${member.guild.id}`) === false) return;
  var canvaskanal = member.guild.channels.cache.get(db.fetch(`gçkanal_${member.guild.id}`));
  if (!canvaskanal) return;

  const request = require("node-superfetch");
  const Canvas = require("canvas"),
    Image = Canvas.Image,
    Font = Canvas.Font,
    path = require("path");

  var randomMsg = ["Sunucudan Ayrıldı."];
  var randomMsg_integer =
    randomMsg[Math.floor(Math.random() * randomMsg.length)];

  let msj = await db.fetch(`cikisM_${member.guild.id}`);
  if (!msj) msj = `{uye}, ${randomMsg_integer}`;

  const canvas = Canvas.createCanvas(640, 360);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage(
    "https://media.discordapp.net/attachments/791021345956823080/808304850907037706/bb.png"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = `#D3D3D3`;
  ctx.font = `37px "Warsaw"`;
  ctx.textAlign = "center";
  ctx.fillText(`${member.user.username}`, 300, 342);

  let avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
  const { body } = await request.get(avatarURL);
  const avatar = await Canvas.loadImage(body);

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(250 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
  ctx.clip();
  ctx.drawImage(avatar, 250, 55, 110, 110);

  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "ro-BOT-güle-güle.png"
  );

    canvaskanal.send(attachment);
    canvaskanal.send(
      msj.replace("{uye}", member).replace("{sunucu}", member.guild.name)
    );
    if (member.user.bot)
      return canvaskanal.send(`🤖 Bu bir bot, ${member.user.tag}`);
  
});

client.on("guildMemberAdd", async member => {
  if (db.has(`gçkanal_${member.guild.id}`) === false) return;
  var canvaskanal = member.guild.channels.cache.get(db.fetch(`gçkanal_${member.guild.id}`));

  if (!canvaskanal || canvaskanal ===  undefined) return;
  const request = require("node-superfetch");
  const Canvas = require("canvas"),
    Image = Canvas.Image,
    Font = Canvas.Font,
    path = require("path");

  var randomMsg = ["Sunucuya Katıldı."];
  var randomMsg_integer =
    randomMsg[Math.floor(Math.random() * randomMsg.length)];

  let paket = await db.fetch(`pakets_${member.id}`);
  let msj = await db.fetch(`cikisM_${member.guild.id}`);
  if (!msj) msj = `{uye}, ${randomMsg_integer}`;

  const canvas = Canvas.createCanvas(640, 360);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/802957064716156989/808303980777046037/HOSGELDIN.png"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = `#D3D3D3`;
  ctx.font = `37px "Warsaw"`;
  ctx.textAlign = "center";
  ctx.fillText(`${member.user.username}`, 300, 342);

  let avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }) ;
  const { body } = await request.get(avatarURL);
  const avatar = await Canvas.loadImage(body);

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(250 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
  ctx.clip();
  ctx.drawImage(avatar, 250, 55, 110, 110);

  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "ro-BOT-hosgeldin.png"
  );

  canvaskanal.send(attachment);
  canvaskanal.send(
    msj.replace("{uye}", member).replace("{sunucu}", member.guild.name)
  );
  if (member.user.bot)
    return canvaskanal.send(`🤖 Bu bir bot, ${member.user.tag}`);
});

//-----------------------KOMUTLAR-----------------------\\
client.on("message", async message => {
  if (!message.guild) return;

  if (db.has(`sayac_${message.guild.id}`) === true) {
    if (db.fetch(`sayac_${message.guild.id}`) <= message.guild.members.cache.size) {
      const embed = new Discord.MessageEmbed()
        .setTitle(`Tebrikler ${message.guild.name}!`)
        .setDescription(`Başarıyla \`${db.fetch(`sayac_${message.guild.id}`)}\` kullanıcıya ulaştık! Sayaç sıfırlandı!`)
        .setColor("RANDOM");
      message.channel.send(embed);
      message.guild.owner.send(embed);
      db.delete(`sayac_${message.guild.id}`);
    }
  }
});


client.on("guildMemberRemove", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;

    member.guild.channels.cache.get(channel).send(`**${member.user.tag}** Sunucudan Ayrıldı Görüşmek Üzere! \`${db.fetch(`sayac_${member.guild.id}`)}\` Üye Olmamıza Son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` Üye Kaldı!`);
});
client.on("guildMemberAdd", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;

    member.guild.channels.cache.get(channel).send(`**${member.user.tag}** Sunucuya Katıldı Hoşgeldin! \`${db.fetch(`sayac_${member.guild.id}`)}\` Üye Olmamıza Son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` Üye Kaldı!`);
});
//-----------------------KOMUTLAR-----------------------\\
client.on("guildMemberAdd", member => {
  let rol = db.fetch(`autoRole_${member.guild.id}`);
if (!rol) return;
  let kanal = db.fetch(`autoRoleChannel_${member.guild.id}`);
  if (!kanal) return;

  member.roles.add(member.guild.roles.cache.get(rol));
  let embed = new Discord.MessageEmbed()
    .setDescription(
      "> :loudspeaker:  **Sunucuya yeni katılan** **" +
        member.user.username +
        "** **Kullanıcısına** <@&" +
        rol +
"> **Rolü verildi** :white_check_mark: "
    )
    .setColor("RANDOM") 
  member.guild.channels.cache.get(kanal).send(embed);
});
//-----------------------KOMUTLAR-----------------------\\
client.on("message", async msg => {

  let saas = await db.fetch(`saas_${msg.guild.id}`);

  if (saas == 'kapali') return;

  if (saas == 'acik') {

  if (msg.content.toLowerCase() === 'sa') {

    msg.reply('Aleyküm Selam Hoşgeldin <a:deneme:786584136289878058>');

  }

  }

});
//-----------------------KOMUTLAR-----------------------\\

const dctrat = require('dctr-antispam.js'); 

var authors = [];
var warned = [];

var messageLog = [];

client.on('message', async message => {
const spam = await db.fetch(`spam.${message.guild.id}`);
if(!spam) return;
const maxTime = await db.fetch(`max.${message.guild.id}.${message.author.id}`);
const timeout = await db.fetch(`time.${message.guild.id}.${message.author.id}`);
db.add(`mesaj.${message.guild.id}.${message.author.id}`, 1)
if(timeout) {
const sayı = await db.fetch(`mesaj.${message.guild.id}.${message.author.id}`);
if(Date.now() < maxTime) {
  const westraaaaam = new Discord.MessageEmbed()
  .setColor(0x36393F)
  .setDescription(`<@${message.author.id}> , **Bu sunucuda spam yapmak yasak!**`)
 // .setFooter(`Bu mesaj otomatik olarak silinecektir.`)
 if (message.member.hasPermission("BAN_MEMBERS")) return ;
 message.channel.send(westraaaaam).then(msg => msg.delete({timeout: 1500}));
  return message.delete();
  
}
} else {
db.set(`time.${message.guild.id}.${message.author.id}`, 'ok');
db.set(`max.${message.guild.id}.${message.author.id}`, Date.now()+3000);
setTimeout(() => {
db.delete(`mesaj.${message.guild.id}.${message.author.id}`);
db.delete(`time.${message.guild.id}.${message.author.id}`);
}, 500) // default : 500
}


});

//-----------------------KOMUTLAR-----------------------\\


client.on("message", async m => {
  let prefix = "?!";
  let kmt = m.content.startsWith(prefix) ? m.content.replace(prefix,"").split(" ")[0] : null;
  let args = m.content.startsWith(prefix) ? m.content.split(prefix)[1].split(" ").slice(1) : [];
  let alfabe = ("abcçdefghıijklmnoöprsştuüvyz").split("");
  let capsyazi = m.content.split("").filter(i=> alfabe.some(a=> (a === i.toLowerCase()) && (i.toUpperCase() === i)) || i === "İ").join("");
  if(!db.get(`s${m.guild.id}`)) {
    db.set(`s${m.guild.id}`, {});
  }
  if(!db.get(`s${m.guild.id}.capskoruma`)) {
    db.set(`s${m.guild.id}.capskoruma`, {durum:false,oran:70});
  }
  let capsveri = db.get(`s${m.guild.id}.capskoruma`);
  if(!m.content.startsWith(prefix) && capsveri.durum == true && (capsyazi.length/m.content.length)*100 > capsveri.oran-1) {
    m.delete();
    m.channel.send((new Discord.MessageEmbed()).setDescription(m.author.tag + " çok fazla büyük harf kullanıyorsun!"));
  }
  if(m.author.bot || m.channel.type == "dm" || !m.content.startsWith(prefix)) return;
  if(kmt === "capskoruma") {
    if(!m.member.hasPermission("ADMINISTRATOR")) return m.channel.send((new Discord.MessageEmbed()).setDescription("Bu komudu kullanma yetkin yok."));
    if(args[0] === "aç") {
      if(db.get(`s${m.guild.id}`).capskoruma.durum == true) return m.channel.send((new Discord.MessageEmbed()).setDescription("Caps koruması zaten açık!"));
      db.set(`s${m.guild.id}.capskoruma.durum`, true);
      m.channel.send((new Discord.MessageEmbed()).setDescription("Caps koruma açıldı!"));
    } else if(args[0] === "kapa") {
      if(db.get(`s${m.guild.id}`).capskoruma.durum == false) return m.channel.send((new Discord.MessageEmbed()).setDescription("Caps koruması zaten kapalı!"));
      db.set(`s${m.guild.id}.capskoruma.durum`, false);
      m.channel.send((new Discord.MessageEmbed()).setDescription("Caps koruma kapandı!"));
    } else if(args[0] === "oran") {
      if(!args[1]) return m.channel.send((new Discord.MessageEmbed()).setDescription("Yüzde kaçı büyük harf olunca uyarı vereceğini girin.\nÖrnekler: \n"+prefix+"capskoruma oran 10\n"+prefix+"capskoruma oran %10\n"+prefix+"capskoruma oran 10%"));
      args[1]=args[1].replace(/%/g,"");
      if(isNaN(args[1])) return m.channel.send((new Discord.MessageEmbed()).setDescription("Yüzde kaçı büyük harf olunca uyarı vereceğini sayı olarak girin.\nÖrnekler: \n"+prefix+"capskoruma oran 10\n"+prefix+"capskoruma oran %10\n"+prefix+"capskoruma oran 10%"));
      args[1]=parseInt(args[1]);
      if(args[1] > 100 || args[1] < 1) return m.channel.send((new Discord.MessageEmbed()).setDescription("Yüzde 1 ile 100 arasında olmalı."));
      if(db.get(`s${m.guild.id}`).capskoruma.oran === args[1]) return m.channel.send((new Discord.MessageEmbed()).setDescription("Oran zaten yüzde `" + args[1] + "` olarak ayarlanmış!"));
      db.set(`s${m.guild.id}.capskoruma.oran`, args[1]);
      m.channel.send((new Discord.MessageEmbed()).setDescription("Oran `" + args[1] + "` olarak ayarlandı."));
    } else if(args[0] === "ayarlar") {
      let cps = db.get(`s${m.guild.id}`).capskoruma;
      m.channel.send((new Discord.MessageEmbed()).setDescription("Durum: " + (cps ? "Açık" : "Kapalı")+"\nBüyük harf oranı: "+cps.oran+"%"));
    } else return m.channel.send((new Discord.MessageEmbed()).setDescription(prefix+kmt+" [ aç, kapa, oran, ayarlar ]"));
  }
})



//-----------------------KOMUTLAR-----------------------\\



client.on('message', async msg => {
  let ozelkomut = await db.fetch(`sunucuKomut_${msg.guild.id}`);
  let ozelkomutYazi;
  if (ozelkomut == null) ozelkomutYazi = 'Burayı silme yoksa hatalı olur'
  else ozelkomutYazi = ''+ ozelkomut +''
  if (msg.content.toLowerCase() === ozelkomutYazi) {
      let mesaj = await db.fetch(`sunucuMesaj_${msg.guild.id}`);
  let mesajYazi;
  if (mesaj == null) mesajYazi = 'Burayı silme yoksa hatalı olur'
  else mesajYazi = ''+ mesaj +''
    msg.channel.send(mesajYazi)
  }
});

client.on("message", msg => {
    //let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
    const rache = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**Prefixim: __?!__**\n **Yardım için: __?!yardım__**\n **Sitemize Gitmek İçin [Tıkla](https://www.rylan.ml/)**\n **Botu Eklemek İçin [Tıkla](https://discord.com/api/oauth2/authorize?client_id=801088331890950164&permissions=8&scope=bot)**`)
  if (msg.content.includes(`<@${client.user.id}>`) || msg.content.includes(`<@!${client.user.id}>`)) {
    msg.channel.send(rache);
  }
});


//-----------------------KOMUTLAR-----------------------\\



client.on('message', msg => {
  if (msg.content.toLowerCase() === 'rylan ne yapıyorsun') 
    msg.reply('İyi Öyle Takılıyorum Sen Napıyorsun ?');
  }
);

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bende iyiyim') 
    msg.reply('İyi Hep Öyle Kal İnş');
  }
);

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'eyw') 
    msg.reply('Bşd');
  }
);

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bot benle konuşuyo aq') 
    msg.reply('Yo Ne Konuşması dsftgyuıop');
  }
);

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bot benle konuşuyo mk') 
    msg.reply('Yo Ne Konuşması dsftgyuıop');
  }
);

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bot benle konuşuyo') 
    msg.reply('Yo Ne Konuşması dsftgyuıop');
  }
);

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bot benle konuşuyo asdsdfsd') 
    msg.reply('Yo Ne Konuşması dsftgyuıop');
  }
);

//-----------------------KOMUTLAR-----------------------\\
bot.command({
  name:"boks",
  code:`
  $color[GRAY]
  $title[Göster GÜCÜNÜ !]
  $image[https://media.tenor.com/images/36179549fa295d988fc1020a7902c41c/tenor.gif]
  $author[Boks Makinesine Vuruldu !;$authorAvatar]
$description[$thumbnail[https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpgJsoDvSdWzQ-pl93obsTwcFHrN1qtlFaw&usqp=CAU]
$randomText[Sağ;Sol] Elini Yumruk Yapıp Güzelce Kasıldın.
Son hızla vurmaya çalıştın !]
$editIn[5s;{description: Sonuç !
%$random[0;100] Vurdun 🤔}{color:$randomText[BLUE;RED]}
{thumbnail:https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpgJsoDvSdWzQ-pl93obsTwcFHrN1qtlFaw&usqp=CAU}
{author:Bakalım:$authorAvatar}{title:İŞTE BU}{image:https://oyunmakinalari.files.wordpress.com/2017/02/ithal-boks-makinasc4b1-1.png}]
$onlyIf[$message==;]`
})

bot.command({
  name:"abiniara",
  code:`
  Bu Sunucuda Abini Arıyorsun 🔍
  $editIn[5s;{author:Abin Bulundu !}{thumbnail:$userAvatar[$randomUserID]}{description:Bence Bu Sunucudaki Abin <@$randomUserID>}]
  `
})

bot.command({
  name:"tokatla",
  code:`
  $author[OSMANLI TOKADI Zamanı !;$userAvatar[$mentioned[1]]]
  $description[$thumbnail[https://cdn.discordapp.com/attachments/787004564888879126/797630449068277811/indir-removebg-preview.png]
    $username#$discriminator Kişisi $username[$mentioned[1]]#$discriminator[$mentioned[1]]
  Kişisine **OSMANLI** tokadı attı]
  $image[https://4.bp.blogspot.com/-WfzGkNhjFIE/Vi-vwoWklXI/AAAAAAAAPCc/HXSnXtEMGs0/w680/kemal_sunal_sener_sen_tokat.gif]
  $suppressErrors[Birini Etiketledigine Eminmisin ?]
 $onlyIf[$mentioned[1]!=$authorID;Kendine O Kadar Hızlı Vurdun Ki.Allah Belanı Verdi]
  $onlyIf[$message!=;Dostum Birini Etiketlemeyi Unuttun !]
  `
  })


bot.command({
  name:"aşkölçer",
  code:`
  $author[AŞK Ölçme Zamanı !;$userAvatar[$mentioned[1]]]
  $description[$thumbnail[https://media.tenor.com/images/752063d293a04a2ce7ac64b8f983e4d2/tenor.gif]
    $username#$discriminator Kişisinin $username[$mentioned[1]]#$discriminator[$mentioned[1]]
Kişisine Aşkı
=
  $randomText[%$random[0;9]🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤 C-Ciddenmi;%$random[10;19]♥️🖤🖤🖤🖤🖤🖤🖤🖤🖤 Hissin Yok.;%$random[20;29]♥️♥️🖤🖤🖤🖤🖤🖤🖤🖤 Buna Aşk Denmez.;%$random[30;39]♥️♥️♥️🖤🖤🖤🖤🖤🖤🖤 Kendine Gel Sevgisiz.;%$random[40;49]♥️♥️♥️♥️🖤🖤🖤🖤🖤🖤 Yeni bir adım atmaya başladın.;%$random[50;59]♥️♥️♥️♥️♥️🖤🖤🖤🖤🖤 Yolun Yarısı İyidir.;%$random[60;69]♥️♥️♥️♥️♥️♥️🖤🖤🖤🖤 Sevgili olabilirsiniz bence.;%$random[70;79]♥️♥️♥️♥️♥️♥️♥️🖤🖤🖤 Aşk Diyebilirim ama tam değil.;%$random[80;89]♥️♥️♥️♥️♥️♥️♥️♥️🖤🖤 Oğlum Cok İyi Lan.;%$random[90;99]♥️♥️♥️♥️♥️♥️♥️♥️♥️🖤 Yinede Tam Değil.;%100♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️ İŞTE GERÇEK AŞK BUDUR !]]
  $suppressErrors[Birini Etiketledigine Eminmisin ?]
  $onlyIf[$isBot[$mentioned[1]]!=true;Bot Seni S.sevemez]

 $onlyIf[$mentioned[1]!=$authorID;K.Kendinle Barışık İnsanlar. Dünyanın En Masum İnsanıdır.]
  $onlyIf[$message!=;Dostum Birini Etiketlemeyi Unuttun !]
  `
})

bot.joinCommand({
        channel: "$getServerVar[ototaglog]", 
        code: `$username Giriş Yaptı İsmini $nickname Yaptım
        $changeNickname[$authorID;$replaceText[$getServerVar[ototag];-üye-;$username;-1]]`
})
bot.onJoined()

bot.command({
  name:"ototagkapat",
  code:`
  Ototag Sistemi Kapatılmıştır.
  $resetServerVar[ototag]
  $resetServerVar[ototaglog]
  $onlyPerms[admin;Yetkiniz Yok !]
  `
})

bot.command({
  name:"ototag",
  code:`
  Log Kanalı \`\`\`$channelName[$mentionedChannels[1]]\`\`\` Olarak
Tag ise \`\`\`$replaceText[$noMentionMessage;-üye-;$username;-1]\`\`\` Olarak Belirlenmiştir
  $setServerVar[ototag;$noMentionMessage]
  $setServerVar[ototaglog;$mentionedChannels[1]]
  $onlyPerms[admin; Üzgünüm Bunun İçin Yetkiniz Yok !]
  $onlyIf[$message[2]!=; Kullanım ?!ototag #kanal tagınız (gelişmiş nereye -üye- Yazarsanız Tag Yeri Ayarlanır)]
  `
})

bot.readyCommand({
channel: "807918902083977226",
code: `
Aktifleştirildim.✅

Güncel İstatistiklerim 🌐;

\`\`$serverCount\`\` Sunucu !
\`\`$allMembersCount\`\` Üye !`
})
//-----------------------EKONOMİ-----------------------\\
bot.command({
  name:"hesapkur",
  code:`
  Hesap Bilgileri Kaydedildi.
  
  İsim ve Soyisim = $message[1] | $message[2]
  Yaş = $message[3]
  $setGlobalUserVar[hesap;İsim = $message[1] | Soyisim = $message[2] | Yaş = $message[3];$authorID]
  $onlyIf[$isNumber[$message[3]]!=false;Girilen Yaş Sayi Degil !]
  $onlyIf[$getGlobalUserVar[hesap;$authorID]==yok; Hesabın Zaten Var !]
  $onlyIf[$message[3]!=; Hesabınız İçin İsim ve Soyisim ve Yaşınızı Giriniz !]
  `})

bot.command({
  name:"para",
  code:`
  Yapılan İşlem \`\`\`$message[1]\`\`\`
  Kişi \`\`\`$username[$mentioned[1]]#$discriminator[$mentioned[1]]\`\`\`
  Miktar \`\`\`$message[3]\`\`\`
  $setGlobalUserVar[para;$replaceText[$replaceText[$message[1];ekle;$sum[$getGlobalUserVar[para;$mentioned[1]];$message[3]];-1];sil;$sub[$getGlobalUserVar[para;$mentioned[1]];$message[3]];-1];$mentioned[1]]
  $onlyForIDs[713831710885806125;Üzgünüm Yetkili Bir Abiye Benzemiyorsun]
  $onlyIf[$message[3]!=; Kullanım ?!para ekle/sil <kişi> <miktar>]
$onlyIf[$isNumber[$message[3]]!=false;Girilen Miktar Sayı Degil !]
$onlyIf[$checkContains[$message[1];ekle;sil]!=false; Yapacağın İslem ?!para ekle/sil]
$onlyIf[$getGlobalUserVar[hesap;$authorID]!=yok;Hesap Olusturulmadı !]
  `
})

bot.command({
  name:"maaş",
  code:`
  Haftalık Maaş Alındı.
  Durum: \`\`\`$getGlobalUserVar[meslek;$authorID]\`\`\`
  Verilen Maaş: \`\`\`$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[meslek;$authorID];işsiz;500;-1];muhabir;1500;-1];doktor;2500;-1];polis;3500;-1]\`\`\`
  $globalCooldown[1h;Daha Yeni Maaş Edindin 1 Hafta Sonra Dene !]
  $setGlobalUserVar[para;$sum[$getUserVar[para;$authorID];$replaceText[$replaceText[$replaceText[$replaceText[$getUserVar[meslek;$authorID];işsiz;500;-1];muhabir;1500;-1];doktor;2500;-1];polis;3500;-1]];$authorID]
  $onlyIf[$getGlobalUserVar[hesap;$authorID]!=yok;Hesap Olusturulmadı !]
  `
})


bot.command({
  name:"meslek",
  code:`
  Seçilen Meslek \`\`\`$message[1]\`\`\` Verilen Maaş \`\`\`$replaceText[$replaceText[$replaceText[$message[1];doktor;2500;-1];polis;3500;-1];muhabir;1000;-1]\`\`\`
  $setGlobalUserVar[meslek;$message[1];$authorID]
  $globalCooldown[1h;Daha Yeni Meslek Edindin 1 Hafta Sonra Dene !]
  $onlyIf[$checkContains[$message[1];doktor;polis;muhabir]!=false; Girdiğin Meslek doktor/polis/muhabir Olmalıdır !]
  $onlyIf[$message!=;Meslek Secmek İcin Birini Yaz !]
  $onlyIf[$getGlobalUserVar[hesap;$authorID]!=yok;Hesap Olusturulmadı !]
  ` 
})

bot.command({
  name:"çalış",
  code:`
  \`\`\`$randomText[1 Kişiye Logo Yaptin; Çöp Topladın;Hamburgercide Çalıştın; Bakıcılık Yaptın]\`\`\`
  Ve Toplam \`\`\`$random[15;75] ₺\`\`\` Kazandın.
  $setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$random[15;75]];$authorID]
$globalCooldown[1d; Bugünlük İs Yok.Yarin Gel !]
$onlyIf[$getGlobalUserVar[hesap;$authorID]!=yok;Hesap Olusturulmadı !]
`})


bot.command({
  name:"kumar",
  code:`
  Kumar Oynadın.
  $replaceText[$replaceText[$randomText[helal;go];helal; Kazandığın Miktar $multi[$message[1];2];25];go; Kaybettiğin Miktar $message[1];50]
  $setGlobalUserVar[para;$replaceText[$replaceText[$randomText[helal;go];helal;$sum[$getGlobalUserVar[para;$authorID];$multi[$message[1];2]];25];go;$sub[$getGlobalUserVar[para;$authorID];$message[1]];50];$authorID]
  $onlyIf[$message[1]<=$getGlobalUserVar[para;$authorID];Paran Yetmiyor !]
  $onlyIf[$isNumber[$message[1]]!=false; Girdiğin Değer Yanlış !]
  $onlyIf[$message[1]>0;0 ve Küçük Değer Giremessin !]
  $onlyIf[$getGlobalUserVar[hesap;$authorID]!=yok;Hesap Olusturulmadı !]
  `
})

bot.command({
  name:"param",
  code:`
  $description[
    $thumbnail[$userAvatar[$mentioned[1;yes]]]
    $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]] Kişide
    Bulunan Toplam Para \`\`\`$getGlobalUserVar[para;$mentioned[1;yes]]\`\`\`
  ]
  $footer[Sorgulayan • $username;$authorAvatar]
  $onlyIf[$getGlobalUserVar[hesap;$authorID]!=yok;Hesap Olusturulmadı !]
  `
})
















client.on("roleDelete", async role => {
  let rolko = await db.fetch(`rolk_${role.guild.id}`);
  if (rolko) { 
         const entry = await role.guild.fetchAuditLogs({ type: "ROLE_DELETE" }).then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
  role.guild.roles.create({ data: {
          name: role.name,
          color: role.color,
          hoist: role.hoist,
          permissions: role.permissions,
          mentionable: role.mentionable,
          position: role.position
}, reason: 'Silinen Roller Tekrar Açıldı.'})
  }
})

//

client.on("roleCreate", async role => {
  let rolk = await db.fetch(`rolk_${role.guild.id}`);
  if (rolk) { 
       const entry = await role.guild.fetchAuditLogs({ type: "ROLE_CREATE" }).then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
  role.delete()
  }
})


client.on("emojiDelete", async (emoji, message, channels) => {
  let emojik = await db.fetch(`emojik_${emoji.guild.id}`)
  if (emojik) {
  const entry = await emoji.guild.fetchAuditLogs({ type: "EMOJI_DELETE" }).then(audit => audit.entries.first());
  if (entry.executor.id == client.user.id) return;
  if (entry.executor.id == emoji.guild.owner.id) return;
  if (!emoji.guild.members.cache.get(entry.executor.id).hasPermission('ADMINISTRATOR')) {
    
  emoji.guild.emojis.create(`${emoji.url}`, `${emoji.name}`).catch(console.error);

  
  }
  }
});
























client.on('channelCreate', async channel => {
  const c = channel.guild.channels.cache.get(db.fetch(`nordxmodlog${channel.guild.id}`));
  if (!c) return;
    var embed = new Discord.MessageEmbed()
                    .addField(`Kanal oluşturuldu`, `Kanal İsmi: \`${channel.name}\`\n Kanal Türü: **${channel.type}**\nKanal ID: ${channel.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL)
    c.send(embed)
});

client.on('channelDelete', async channel => {
  const c = channel.guild.channels.cache.get(db.fetch(`nordxmodlog${channel.guild.id}`));
  if (!c) return;
    let embed = new Discord.MessageEmbed()
                    .addField(`Kanal silindi`, `Silinen Kanal İsmi: \`${channel.name}\`\nSilinen Kanal Türü: **${channel.type}**\nSilinen Kanal ID: ${channel.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL)

    c.send(embed)
});

   client.on('channelNameUpdate', async channel => {
  const c = channel.guild.channels.cache.get(db.fetch(`nordxmodlog${channel.guild.id}`));
  if (!c) return;
    var embed = new Discord.MessageEmbed()
                    .addField(`Kanal İsmi değiştirildi`, ` Yeni İsmi: \`${channel.name}\`\nKanal ID: ${channel.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL)
    c.send(embed)
});




client.on('emojiCreate', emoji => {
  const c = emoji.guild.channels.cache.get(db.fetch(`nordxmodlog${emoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.MessageEmbed()
                    .addField(`Emoji oluşturuldu`, ` İsmi: \`${emoji.name}\`\n Gif?: **${emoji.animated}**\nEmoji ID: ${emoji.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${emoji.client.user.username}#${emoji.client.user.discriminator}`, emoji.client.user.avatarURL)

    c.send(embed)
    });
client.on('emojiDelete', emoji => {
  const c = emoji.guild.channels.cache.get(db.fetch(`nordxmodlog${emoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.MessageEmbed()
                    .addField(`Emoji silindi`, ` İsmi: \`${emoji.name}\`\n Gif? : **${emoji.animated}**\nSilinen Emoji ID: ${emoji.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${emoji.client.user.username}#${emoji.client.user.discriminator}`, emoji.client.user.avatarURL)

    c.send(embed)
    });
client.on('emojiUpdate', (oldEmoji, newEmoji) => {
  const c = newEmoji.guild.channels.cache.get(db.fetch(`nordxmodlog${newEmoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.MessageEmbed()
                    .addField(`Emoji güncellendi`, ` Eski ismi: \`${oldEmoji.name}\`\n Yeni ismi: \`${newEmoji.name}\`\nEmoji ID: ${oldEmoji.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${newEmoji.client.user.username}#${newEmoji.client.user.discriminator}`, newEmoji.client.user.avatarURL)

    c.send(embed)
    });

client.on('messageDelete', async message => {    
  if(message.author.bot) return

    const channel = message.guild.channels.cache.get(db.fetch(`nordxmodlog${message.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.MessageEmbed()
                    .setAuthor(`Silen Kişi: ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL())
                    .setTitle("Mesaj silindi")                
                    .addField(`Silinen mesaj : ${message.content}`,`Silindiği Kanal: ${message.channel.name}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${message.client.user.username}#${message.client.user.discriminator}`, message.client.user.avatarURL)

    channel.send(embed)
});

client.on('messageUpdate', async(oldMessage, newMessage) => {
    if(oldMessage.author.bot) return;
    if(oldMessage.content == newMessage.content) return;

    const channel = oldMessage.guild.channels.cache.get(db.fetch(`nordxmodlog${oldMessage.guild.id}`));
    if(!channel) return;

    let embed = new Discord.MessageEmbed()
    .setTitle("Mesaj güncellendi!")
    .addField("Eski mesaj : ",`${oldMessage.content}`)
    .addField("Yeni mesaj : ",`${newMessage.content}`)
    .addField("Kanal : ",`${oldMessage.channel.name}`)
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(`${oldMessage.client.user.username}#${oldMessage.client.user.discriminator}`,`${oldMessage.client.user.avatarURL}`)

    channel.send(embed)
});

client.on('roleCreate', async (role) => {    

    const channel = role.guild.channels.cache.get(db.fetch(`nordxmodlog${role.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.MessageEmbed()
.addField(`Rol oluşturuldu`, `Rol ismi: \`${role.name}\`\nRol ID: ${role.id}`)                    
.setTimestamp()
.setColor("RANDOM")
.addField("Rol renk kodu : ",`${role.hexColor}`)
.setFooter(`${role.client.user.username}#${role.client.user.discriminator}`, role.client.user.avatarURL)

    channel.send(embed)
});

client.on('roleDelete', async (role) => {    

    const channel = role.guild.channels.cache.get(db.fetch(`nordxmodlog${role.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.MessageEmbed()
.addField(`Rol silindi`, `Silinen Rol ismi: \`${role.name}\`\nSilinen Rol ID: ${role.id}`)                    
.setTimestamp()
.setColor("RANDOM")
    .addField("Rol renk kodu : ",`${role.hexColor}`)
.setFooter(`${role.client.user.username}#${role.client.user.discriminator}`, role.client.user.avatarURL)

    channel.send(embed)
})
client.on('voiceStateUpdate', (oldMember, newMember) => {
  
 // if (!logA[oldMember.guild.id]) return;
  
  if (db.has(`nordxmodlog${oldMember.guild.id}`) === false) return;
  
  var kanal = oldMember.guild.channels.cache.get(db.fetch(`nordxmodlog${oldMember.guild.id}`).replace("<#", "").replace(">", ""))
  if (!kanal) return;
  
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel

  if(oldUserChannel === undefined && newUserChannel !== undefined) {

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${newMember.user} adlı kullanıcı \`${newUserChannel.name}\` isimli sesli kanala giriş yaptı!`)
    kanal.send(embed);
    
  } else if(newUserChannel === undefined){

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${newMember.user} adlı kullanıcı sesli kanaldan çıkış yaptı!`)
    kanal.send(embed);
    
  }
});





  bot.command({
  name:"muterol",
  code:`
  Mute Rol \`\`\`$roleName[$mentionedRoles[1]]\`\`\` Olarak Ayarlandı
  $suppressErrors[Etiketledigin Rolu Kontrol Et !]
  $setServerVar[mrol;$mentionedRoles[1]]
  $onlyPerms[admin;Yetkin Yok !]
  $onlyIf[$message[1]!=;Bir Rol Etiketle !]
  `
})

  bot.command({
  name:"tempmute",
  code:`
  <@$mentioned[1]> Kişisinin Susturulması Açıldı !
  $takeRoles[$mentioned[1];$getServerVar[mrol]]
  $wait[$message[2]]
  $giveRoles[$mentioned[1];$getServerVar[mrol]]
  $onlyPerms[admin;Yetkin Yok !]
  $onlyIf[$getServerVar[mrol]!=yok;]
  $onlyIf[$message[2]!=;Kullanım ?!tempmute <kişi> <süre>]
  `
})

bot.command({
  name:"rastgele-meme",
  code:`
$image[https://ctk-api.herokuapp.com/meme/$random[1;2300]]
`
})


bot.command({
  name:"fortnite",
  code:`
$argsCheck[>1;Bir İsim Yaz = Fortnite İsmi]
https://fortnite-api.com/v1/stats/br/v2?language=tr&name=$message[1]
`
})

bot.command({
name: "dolar",
code: `$title[Güncel dolar Kuru]
$description[İsim : $jsonRequest[https://dovizkurlari-l6vtviaacq-uc.a.run.app/api/doviz/usd;isim]

Kod : $jsonRequest[https://dovizkurlari-l6vtviaacq-uc.a.run.app/api/doviz/usd;kod]

Alış : $jsonRequest[https://dovizkurlari-l6vtviaacq-uc.a.run.app/api/doviz/usd;ForexBuying]

Satış : $jsonRequest[https://dovizkurlari-l6vtviaacq-uc.a.run.app/api/doviz/usd;ForexSelling]

Banknot Alış : $jsonRequest[https://dovizkurlari-l6vtviaacq-uc.a.run.app/api/doviz/usd;BanknoteBuying]

Banknot Satış : $jsonRequest[https://dovizkurlari-l6vtviaacq-uc.a.run.app/api/doviz/usd;BanknoteSelling]]
$footer[Kaynak : T.C Merkez Bankası;$authorAvatar]
$color[RANDOM]`
})

bot.command({
  name:"google",
  code:`
  $color[$getServerVar[hex]]
  $title[$jsonRequest[https://api.somecool.repl.co/google-search?q=$replaceText[$message; ;%20;-1];title;Böyle Bir Site Bulunamadı !]]
  
  $description[
  
  [Siteye Git !\\]($jsonRequest[https://api.somecool.repl.co/google-search?q=$replaceText[$message; ;%20;-1];link;Böyle Bir Site Bulunamadı !])
  
  Site Açıklaması = $jsonRequest[https://api.somecool.repl.co/google-search?q=$replaceText[$message; ;%20;-1];description;Böyle Bir Site Bulunamadı !]
  ]
  $onlyIf[$message!=;Bir şey aratmam için yazı yazmalısın !]
  `
})