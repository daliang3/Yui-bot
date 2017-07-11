const {Command} = require('discord.js-commando');
const {RichEmbed, Message} = require('discord.js');

module.exports = class RollCmd extends Command{
    constructor(client){
        super(client, {
            name: 'guide',
            group: 'pad',
            memberName: 'guide',
            description: '',
            examples: ['./guide']
        });
    }
    async run(message, args){
        const gremory = [ '2998', '2999', '3379'];
        var roll = gremory[Math.floor(Math.random() * gremory.length)]; 
        const embed = new RichEmbed()
            .setTitle('"I made it for a reason" - Eric')
            .setThumbnail('http://www.puzzledragonx.com/en/img/book/' + roll + '.png')
            .setURL('http://tiny.cc/padguide')
            .setDescription("No need to panic")
            .setColor(0x00AE86);
        message.channel.send({embed});
    }
};