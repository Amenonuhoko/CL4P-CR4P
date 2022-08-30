module.exports = {
	name: "message",
	once: false,
	execute(message, Client, Discord, prefix, audio) {
		const cooldowns = new Discord.Collection();

		// Break if does not start with prefix or from bot
		if (!message.content.startsWith(prefix) || message.author.bot) {
			return;
		}
		// Array(?)
		// Split arguments
		// Slice into non-prefixed
		// Remove whitespace
		const args = message.content.slice(prefix.length).trim().split(/ +/);
		// Takes the first part of the args
		const commandName = args.shift().toLowerCase();
		// Find in collection and store
		const command =
			Client.commands.get(commandName) ||
			Client.commands.find(
				(cmd) => cmd.aliases && cmd.aliases.includes(commandName)
			);
		// If not in collection send error then return
		if (!command) {
			console.log("dawdad");
			message.reply("Command Error").then((msg) => {
				setTimeout(() => msg.delete(), 5000);
			});
			return;
		}

		// Idek
		if (command.args && !args.length) {
			return message.channel.send("No arguments");
		}
		// Cooldowns
		if (!cooldowns.has(command.name)) {
			cooldowns.set(command.name, new Discord.Collection());
		}
		const now = Date.now();
		const timestamps = cooldowns.get(command.name);
		const cooldownAmount = (command.cooldown || 3) * 1000;
		if (timestamps.has(message.author.id)) {
			const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
			if (now < expirationTime) {
				const timeLeft = (expirationTime - now) / 1000;
				return message.reply(`Wait ${timeLeft.toFixed(1)}`);
			}
		}
		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
		// Execute
		try {
			console.log("Command Started");
			command.execute(message, args, Client, Discord, audio);
		} catch (error) {
			console.error(error);
			message.reply("Command Error").then((msg) => {
				setTimeout(() => msg.delete(), 5000);
			});
		}
	},
};
