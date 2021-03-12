module.exports = {
	name: "tekken",
	description: "ping tekken role",
	cooldown: 5,
	execute(message, args) {
		message.channel
			.send(`<@&${"819185868618203186"}> Tekken?`)
			.then((message) => {
				message.delete(10000);
			})
			.catch(console.error);
	},
};
