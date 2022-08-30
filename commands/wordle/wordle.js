module.exports = {
	name: "wordle",
	description: "play wordle game",
	cooldown: 5,
	execute(message, args) {
		var mes = message.content.split(" ");

		var wordle = "proxy";

		if (mes[0] == ">wordle") {
			if (mes[1] == "guess") {
				if (mes[2] == wordle) {
					message.channel.send("correct");
				} else if (mes[2] !== wordle) {
					message.react(
						String.fromCodePoint("R".codePointAt(0) - 65 + 0x1f1e6)
					);
				}
			} else {
				message.reply(`Guess the five letter word`).catch(console.error);
			}
		}
	},
};
