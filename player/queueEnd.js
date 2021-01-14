module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Sırada başka müzik olmadığı için müzik durdu !`);
};