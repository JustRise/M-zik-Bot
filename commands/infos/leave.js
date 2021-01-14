module.exports = {
    name: 'leave',
    description: "Ses kanalını terk eder!",
    usage: 'leave',
    async execute(client, message, args) {
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) return message.channel.send(`Botun ayrılması için botla aynı ses kanalında olmanız gerekir!`)
        voiceChannel.leave()
        message.react('✅')
    }
}