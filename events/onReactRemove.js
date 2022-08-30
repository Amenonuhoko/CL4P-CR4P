module.exports = {
	name: "messageReactionRemove",
	once: false,
	execute(reaction, user, Client) {
		if (reaction.message.channel.id === "819644377571000370") {
			if (reaction.emoji.name === "👍") {
				const member = reaction.message.guild.members.cache.get(user.id);
				const role = reaction.message.guild.roles.cache.find(
					(r) => r.name === "TEKKEN"
				);
				console.log("Someone unreacted");
				member.roles.remove(role);
			}
		}
	},
};
