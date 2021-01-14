module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - İçin YouTube'da hiçbir sonuç bulunamadı ${query} !`);
};