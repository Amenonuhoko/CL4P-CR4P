const Discord = require("discord.js");
const fs = require("fs");
// ENV
require("dotenv").config();

const Client = new Discord.Client();
Client.commands = new Discord.Collection();
const { prefix } = require("./config.json");

// Music Bot
const audio = require("@discordjs/voice");

// Read Commands files
// Create an array of file names in directory
const commandFolders = fs.readdirSync("./commands");
// Loop
for (const folder of commandFolders) {
	// Create an array of files that end in .js
	const commandFiles = fs
		.readdirSync(`./commands/${folder}`)
		.filter((file) => file.endsWith(".js"));
	// Loop
	for (const file of commandFiles) {
		// Import module
		const command = require(`./commands/${folder}/${file}`);
		Client.commands.set(command.name, command);
	}
}

// Read Event Files
// Create an array of files that end in .js
const eventFiles = fs
	.readdirSync("./events")
	.filter((file) => file.endsWith(".js"));
// Loop
for (const file of eventFiles) {
	// Import
	const event = require(`./events/${file}`);
	// If module once is true
	if (event.once) {
		// Add one-time listener
		Client.once(event.name, (...args) =>
			event.execute(...args, Client, Discord, prefix)
		);
	} else {
		Client.on(event.name, (...args) =>
			event.execute(...args, Client, Discord, prefix, audio)
		);
	}
}

Client.login(process.env.TOKEN);
