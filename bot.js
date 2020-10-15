//Darknes Code Share - youtube.com/darknestr
const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(`Bot Başarıyla Hostlandı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);
//Darknes Code Share - youtube.com/d
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');//Lordcreative
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');//Lordcreative
const { Client, Util } = require('discord.js');
const weather = require('weather-js')//Lordcreative//Lordcreative
const fs = require('fs');
const db = require('quick.db');//Lordcreative
require('./util/eventLoader.js')(client);
const path = require('path');//Lordcreative
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');



app.get("/", (request, response) => {
  console.log(Date.now() + "Duble Krallar | Youtube Channel");
  response.sendStatus(200);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};//Lordcreative

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });//Lordcreative
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

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   lordCreative(chalk.bgBlue.green(e.replace(regTokenfynx 'that was redacted')));
// }); //DEVİLHOUSE//

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.on("guildCreate", guild => {  // sunucuya eklendim ve atıldım
let add = client.channels.get("752988176192110633")
const eklendim = new Discord.RichEmbed()

.setTitle(`Sunucuya Eklendim`)
.setTimestamp()
.setColor("GREEN")
.setThumbnail(guild.iconURL)
.addField(`Sunucu İsmi`,guild.name)
.addField(`Sunucu ID`, guild.id)
.addField(`Kurucu`,guild.owner.user.tag)
.addField(`Kurucu ID`,guild.owner.user.id)
.addField(`Üye Sayısı`,guild.memberCount)

add.send(eklendim)

});

client.on("guildDelete", guild => {
let remove = client.channels.get("752988176192110633")
const atildim = new Discord.RichEmbed()


.setTitle(`Sunucudan Atıldım`)
.setTimestamp()
.setColor("RED")
.setThumbnail(guild.iconURL)
.addField(`Sunucu İsmi`,guild.name)
.addField(`Sunucu ID`, guild.id)
.addField(`Kurucu`,guild.owner.user.tag)
.addField(`Kurucu ID`,guild.owner.user.id)
.addField(`Üye Sayısı`,guild.memberCount)

remove.send(atildim)
 
}); 
client.on("ready", () => {
  client.channels.get("697264082381701142").join();
})
//---------------------------------KOMUTLAR---------------------------------\\

client.addListener("guildMemberAdd", async function(member) { member.send(`<a:kral2:740243285376761916> **Sunucumza Hoşgeldin Seninle Beraber **${member.guild.memberCount}** Kişi Olduk !!
<a:emoji_19:740249173126938685> Sunucumzun Sınırsız Davet Linkimiz:** https://discord.gg/e2sJDWM `) })
//---------------------------------KOMUTLAR---------------------------------\\


client.on('guildMemberAdd', async member => {
  await member.addRole(`739770748024913930`) //id yazan yere verilecek rol (unregistered)
  await member.setNickname(`İsim | Yaş`) //yeni gelen kullanıcının adını değiştirme
let member2 = member.user 
let zaman = new Date().getTime() - member2.createdAt.getTime()
var user = member2 
var takizaman = [];
if(zaman < 604800000) {
takizaman = '<a:emoji_00:736442798282375209> Tehlikeli'
} else {
takizaman = `<a:emoji_20:740249550454784120> Güvenli`}require("moment-duration-format");
 let zaman1 = new Date().getTime() - user.createdAt.getTime()
 const gecen = moment.duration(zaman1).format(` YY [Yıl,] DD [Gün,] HH [Saat,] mm [Dakika,] ss [Saniye]`) 
 let dbayarfalanfilan = await db.fetch(`takidbayar${member.guild.id}`)
 let message = member.guild.channels.find(x => x.id === `739980664073355334`) //id yazan kısma kanal id'si [orn: register-chat]
  const taki = new Discord.RichEmbed()
 .setTitle(
     "Duble Krallar Sunucusuna Hoş Geldin"
   )
   .setDescription(`<a:kral2:740243285376761916>**·** **Sunucumuza Hoş Geldin** ${member} 
<a:emoji_200:740256355545383032>**·Seninle Beraber** ${message.guild.memberCount} **Kişiyiz**

<a:emoji_6:736442780053930075>**·** **Kaydının Yapılması İçin İsmini ve Yaşını Yaz**

<a:emoji_4:736442708691910729>**·**<@&739111895654596709> **Rolündeki Yetkililer Seninle İlgilenecektir**

<a:emoji_19:740249173126938685>**·** **Sunucumuzun Sınırsız Davet Bağlantısı** https://discord.gg/e2sJDWM


<a:emoji_99:736442735807954986>**·** **Hesap Açılalı** ${gecen} **Olmuş**
<a:emoji_88:740245080362713188>**·** **Bu Kullanıcı** **|** **${takizaman}**
`)
.setColor('#6278c5')
message.send(taki)
 
         });