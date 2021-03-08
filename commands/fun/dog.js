module.exports = {
	name: "dog",
	description: "barks",
	cooldown: 5,
	execute(message, args) {
		message.channel.send("Woof!");
	}
};
