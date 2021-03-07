module.exports = {
	name: "ping",
	description: "Pings",
	cooldown: 5,
	execute(message, args, client, Discord) {
		const embed = new Discord.MessageEmbed()
			.setColor("#ff0000")
			.setTitle("PONG")
			.setDescription("nice")
			.setFooter(`${message.author.username}`);

		message.channel.send(embed);
	},
};
