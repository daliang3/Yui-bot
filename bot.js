// Requires 
const commando = require('discord.js-commando');
const path = require('path');
const {BOT_TOKEN, OWNER} = process.env; 

// Create an instance of a Commando client
const client = new commando.Client({
    commandPrefix: './',
    owner: OWNER
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

client.login(BOT_TOKEN);