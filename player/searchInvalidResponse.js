module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - Seçim ** iptal edildid** !`);
    } else message.channel.send(`${client.emotes.error} - ** 1 ** ile arasında geçerli bir numara göndermelisiniz **${tracks.length}** !`);
};