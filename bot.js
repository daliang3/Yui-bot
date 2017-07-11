// Requires 
const commando = require('discord.js-commando');
// const sqlite = require('sqlite');
const path = require('path');

// Create an instance of a Commando client
const client = new commando.Client({
    commandPrefix: './',
    owner: process.env.OWNER
});

client.registry
        .registerGroups([
            ['pad', 'Puzzles and Waifus']
        ])
        .registerDefaults()
        .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log('Logged in!');
    client.user.setGame(':thinking:');
})

client.login(process.env.BOT_TOKEN);