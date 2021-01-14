module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Şimdi oynuyor ${track.title} içine ${message.member.voice.channel.name} ...`);
};