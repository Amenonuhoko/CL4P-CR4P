module.exports = {
	name: "delete",
	description: "Deletes messages default limit = 5",
	cooldown: 5,
	execute(message, args, Client, Discord) {
		const limit = 1 + +args[0];
		// console.log(limit);
		message.channel.bulkDelete(limit);
	},
};
