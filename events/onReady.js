module.exports = {
	name: "ready",
	once: true,
	async execute(client) {
		const channel = await client.channels.fetch("819644377571000370");

		channel.messages.fetch().then((messages) => {
			if (messages.size === 0) {
				channel
					.send("React to this message with 👍 to receive the TEKKEN role")
					.then((message) => {
						message.react("👍");
					});
			}
		});
	},
};
