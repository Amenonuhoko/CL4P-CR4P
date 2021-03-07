module.exports = {
	name: "stop",
	description: "Stops song",
	cooldown: 5,
	execute(message, args, client, Discord) {
		client.distube.stop(message);
	},
};
