const Discord = require("discord.js"),
  client = new Discord.Client({
    partials: ["MESSAGE", "REACTION"],
  });

require('dotenv').config();

const WOKCommands = require("wokcommands");
const DisTube = require("distube");
client.distube = new DisTube(client, {
  searchSongs: true,
  emitNewSongOnly: true,
});

// Init
client.once("ready", () => {
  console.log("CL4P-CR4P IS R34DY");
  client.user.setPresence({ game: { name: '?commands', type: 'LISTENING'}})
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

client.login(process.env.TOKEN);
