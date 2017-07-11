// Requires
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();
console.log(process.env.BOT_TOKEN);
// The bot is ready
client.on('ready', () => {
  console.log(process.env.BOT_TOKEN);
})

//client.login(process.env.BOT_TOKEN)