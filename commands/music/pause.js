module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Ses kanalında değilsin !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Şu anda çalınan müzik yok !`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Müzik zaten duraklatılmış !`);

        client.player.pause(message);

        message.channel.send(`${client.emotes.success} - Şarkı ${client.player.getQueue(message).playing.title} duraklatıldı !`);
    },
};