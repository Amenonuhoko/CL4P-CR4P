const Discord = require("discord.js");
const fs = require("fs");

const client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();
const { prefix } = require("./config.json");
// Music Bot
const DisTube = require("distube");
client.distube = new DisTube(client, {
	emitNewSongOnly: true,
	searchSongs: false,
	leaveOnFinish: true,
});
// ENV
require("dotenv").config();
// Search commands folder
const commandFolders = fs.readdirSync("./commands");
for (const folder of commandFolders) {
	const commandFiles = fs
		.readdirSync(`./commands/${folder}`)
		.filter((file) => file.endsWith(".js"));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}
// Search events folder
const eventFiles = fs
	.readdirSync("./events")
	.filter((file) => file.endsWith(".js"));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}
// Init
client.on("ready", () => {
	console.log("CL4P-CR4P IS R34DY");
	client.user.setPresence({
		status: "idle",
		activity: { type: "LISTENING", name: ">commands" },
	});
});
// Commands
client.on("message", (message) => {
	// Check starts with prefix
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	// Split arguments
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command =
		client.commands.get(commandName) ||
		client.commands.find(
			(cmd) => cmd.aliases && cmd.aliases.includes(commandName)
		);
	// Check
	if (!command) return;
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
		command.execute(message, args, client, Discord);
	} catch (error) {
		console.error(error);
		message.reply("Command Error");
	}
});

client.login(process.env.TOKEN);
