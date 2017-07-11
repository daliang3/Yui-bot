// Requires 
const commando = require('discord.js');
const path = require('path');
const {BOT_TOKEN, OWNER} = process.env; 

// Create an instance of a Commando client
const client = new commando.Client();

client.on('ready', () => {
    console.log('Logged in!');
    client.user.setGame(':sigh:');
})

client.login(BOT_TOKEN);