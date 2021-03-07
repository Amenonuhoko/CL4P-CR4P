module.exports = {
	name: "play",
	description: "Play Music",
	args: true,
	cooldown: 5,
	execute(message, args, client, Discord) {
		// Play
		client.distube.play(message, args.join(" "));
		// EVENT LISTEN
		client.distube.on("playSong", (message, song) => {
			const embed = new Discord.MessageEmbed()
				.setColor("#ff0000")
				.setTitle(song.name)
				.setURL(song.url)
				.setAuthor(song.thumbnail)
				.addFields({
					name: "Duration",
					value: song.formattedDuration,
				})
				.setFooter(message.author.username);

			message.channel.send(embed);
		});
	},
};
