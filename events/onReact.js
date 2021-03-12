module.exports = {
	name: "ready",
	once: true,
	execute(client) {
		client.on("messageReactionAdd", (reaction, user) => {
			if (reaction.message.channel.id === "819644377571000370") {
				if (reaction.emoji.name === "👍") {
					const member = reaction.message.guild.members.cache.find(
						(member) => member.id === user.id
					);
					const role = reaction.message.guild.roles.cache.find(
						(r) => r.id === "819185868618203186"
					);

					member.roles.add(role);
				}
			}
		});

		client.on("messageReactionRemove", (reaction, user) => {
			if (reaction.message.channel.id === "819644377571000370") {
				if (reaction.emoji.name === "👍") {
					const member = reaction.message.guild.members.cache.find(
						(member) => member.id === user.id
					);
					const role = reaction.message.guild.roles.cache.find(
						(r) => r.id === "819185868618203186"
					);

					member.roles.remove(role);
				}
			}
		});
	},
};
