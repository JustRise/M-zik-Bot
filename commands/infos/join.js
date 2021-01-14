module.exports = {
    name: 'join',
    description: "Ses kanalına katılır!",
    usage: 'join',
    async execute(client, message, args) {
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) return message.channel.send(`Botun katılmasını sağlamak için bir ses kanalında olmanız gerekir!`)
        voiceChannel.join()
        message.react('✅')
    }
}