import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
import dotenv from 'dotenv';
dotenv.config();
const token = process.env.DISCORD_BOT_TOKEN;
const apiKey = process.env.CAT_API_KEY;

client.on("messageCreate", (message) => {
	if (message.author.bot) return;
	if (message.content.startsWith("Hi")) {
		message.reply("Hello ");
	}
	if (message.content.includes("cat")) {
		if (message.author.bot) return;
		fetch(`https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`)
			.then(res => res.json())
			.then((res) => message.reply("here is an Img of a Cat: " + res[0].url));
	}

})

client.login(token);
