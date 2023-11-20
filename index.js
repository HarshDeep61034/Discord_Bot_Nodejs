import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
import dotenv from 'dotenv';
dotenv.config();
const token = process.env.DISCORD_BOT_TOKEN;

client.on("messageCreate", (message) => {
	message.reply("Hello " + message.globalName);
	console.log(message);
})

client.login(token);
