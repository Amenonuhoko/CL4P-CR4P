module.exports = {
  category: "Fun",
  description: "Play Music",
  name: "play",
  commands: ["play"],
  aliases: ["p"], // Optional
  callback: ({ message, args, client }) => {
    client.distube.play(message, args.join(" "));
  },
};
