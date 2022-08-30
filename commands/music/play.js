module.exports = {
	name: "play",
	description: "Play Music",
	args: false,
	cooldown: 5,
	execute(message, args, Client, Discord) {
		// Play
		// Client.distube.play(message, args.join(" "));
		// EVENT LISTEN
		// Client.distube.on("playSong", (message, song) => {
		// 	const selectedSongs = song.songs[0];
		// 	const embed = new Discord.MessageEmbed()
		// 		.setColor("#ff0000")
		// 		.setTitle(selectedSongs.name)
		// 		.setURL(selectedSongs.url)
		// 		.setThumbnail(selectedSongs.thumbnail)
		// 		.addFields({
		// 			name: "Duration",
		// 			value: song.formattedDuration,
		// 		})
		// 		.setFooter(message.author.username);
		// 	message.channel.send(embed);
		// });
		console.log("here");
		console.log(message.member.voice.channel.id);
		// const connection = audio.joinVoiceChannel({
		// 	channelId: message.member.voice.channelId,
		// });
	},
};
