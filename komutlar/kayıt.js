const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const kayıtlı = message.guild.roles.find(r => r.id === "696769757256613970"); //buraya kayıtlı rolünüzün id'sini koyun
  const misafir = message.guild.roles.find(r => r.id === "739770748024913930"); //buraya misafir rolünüzün id'sini koyun.
  const log = message.guild.channels.find(c => c.id === "739980664073355334"); //buraya kayıt log id koyun
  const tag = "「☪」";
  if(!message.member.roles.array().filter(r => r.id === "739111895654596709")[0]) { //buraya kayıt sorumlusu rolünün id'sini giriniz. SUNUCU AYARLARINDAN kopyalayın.
    return message.channel.send("Bu işlemi sadece Ayarlanmış Kayıt Sorumluları gerçekleştirebilir.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir isim girin.")
      if(!yas) return message.channel.send("Bir yaş girin.")
    c.addRole(kayıtlı)
    c.removeRole(misafir)
    c.setNickname(`${tag} ${nick} | ${yas}`)
    const embed = new Discord.RichEmbed()
    .setAuthor("Başarıyla Kayıt Yapıldı")
    .addField(`Kaydı Yapılan\n`, `${c.user.tag}`)
    .addField(`Kaydı Yapan Yetkili\n`, `${message.author.tag}`)
    .addField(`Yeni İsim\n`, `${tag} ${nick} , ${yas}`)
    .setFooter("Kayıt Sistemi")
    .setColor("RED")
    log.send(embed)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıt"],
  permLevel: 0
};
exports.help = {
  name: "kayıt",
  description: "kayıt",
  usage: "kayıt"
};
