module.exports = {
  category: "Fun",
  description: "Roll Dice",
  name: "dice",
  commands: ["dice"],
  callback: ({ message, args, client }) => {
    message.channel.send(`${Math.floor(Math.random() * 5) + 1}`);
  },
};
