const Discord = require("discord.js"),
  client = new Discord.Client({
    partials: ["MESSAGE", "REACTION"],
  }),
  config = {
    prefix: "?",
    token:
      process.env.TOKEN
  };
const WOKCommands = require("wokcommands");
const DisTube = require("distube");
client.distube = new DisTube(client, {
  searchSongs: true,
  emitNewSongOnly: true,
});
require('dotenv').config();



// Init
client.once("ready", () => {
  console.log("CL4P-CR4P IS R34DY");

  const disabledDefaultCommands = [
    // 'help',
    // 'command',
    // 'language',
    // 'prefix',
    // 'requiredrole'
  ];
  new WOKCommands(client, {
    commandsDir: "commands",
    featureDir: "features",
    showWarns: true, // Show start up warnings
    disabledDefaultCommands,
  })
    .setDefaultPrefix("?")
    .setColor(0xff0000);
});

client.once("reconnecting", () => {
  console.log("R3C0NN3CT1NG");
});
client.once("disconnect", () => {
  console.log("D1SC0NN3CT1NG");
});

// COMMANDS
client.on("message", async (message) => {
  if (message.author.equals(client.user)) return;
  if (!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
});

client.login(config.token);
