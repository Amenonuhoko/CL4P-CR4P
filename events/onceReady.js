module.exports = {
	name: "ready",
	once: true,
	async execute(Client) {
		const channel = await Client.channels.fetch("819644377571000370");

		channel.messages.fetch().then((messages) => {
			if (messages.size === 0) {
				channel
					.send("React to this message with 👍 to receive the TEKKEN role")
					.then((message) => {
						message.react("👍");
					});
			}
		});

		console.log("CL4P-CR4P IS R34DY");
		Client.user.setPresence({
			status: "online",
		});
		Client.user.setActivity(">commands", { type: 2 });
	},
};
