const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Bangkok', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1261346606327009463')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/Zxaicas_ice') //Must be a youtube video link 
    .setState('Your State')
    .setName('mrnekrozyt')
    .setDetails(`THE NAME IT SHOWS YOUR STREAMING [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1261344553164738643/1263186299397865592/sss.gif?ex=6699516a&is=6697ffea&hm=1ca7cebfba0cc7cff847872ac43ed4a3b2641dac7b224d37948bc62d16edd1cc&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('กำลังเล่นแมว','นอน','hhh') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1261344553164738643/1263186299767095296/kawaii-girl-anime.gif?ex=6699516a&is=6697ffea&hm=f9631ce1a7f684821f70dc41c4fcd4ba0a7186da9ce56768eee68c67df667c78&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') //Text when you hover the Small image
    .addButton(' Youtube', 'https://youtu.be/uKxyLmbOc0Q?si=sbM1g0xkkd4OjcQi')
    .addButton(' Join discord me', 'https://discord.gg/m6SDqrwZYm');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd, online, idle, offline" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `ANIME&GAME+Science, hee [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

  const mySecret = process.env['TOKEN'];
client.login(mySecret);