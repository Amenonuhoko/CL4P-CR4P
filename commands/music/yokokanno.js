module.exports = {
	name: "yoko",
	description: "Play Music",
	args: true,
	cooldown: 5,
	execute(message, args, client, Discord) {
		// Play
		client.distube.play(
			"https://www.youtube.com/watch?v=Hj0_OiwTRec",
			args.join(" ")
		);
		// EVENT LISTEN
		client.distube.on("playSong", (message, song) => {
			const selectedSongs = song.songs[0];
			const embed = new Discord.MessageEmbed()
				.setColor("#ff0000")
				.setTitle(selectedSongs.name)
				.setURL(selectedSongs.url)
				.setThumbnail(selectedSongs.thumbnail)
				.addFields({
					name: "Duration",
					value: song.formattedDuration,
				})
				.setFooter(message.author.username);

			message.channel.send(embed);
		});
	},
};
