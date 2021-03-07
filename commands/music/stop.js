module.exports = {
	name: "ping",
	description: "Pings",
	cooldown: 5,
	execute(message, args, client, Discord) {
		client.distube.stop(message);
	},
};
