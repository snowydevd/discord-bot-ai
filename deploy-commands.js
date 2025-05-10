require("dotenv").config();
const { REST, Routes } = require("discord.js");
const token = process.env.DISCORD_TOKEN;
const clientId = process.env.DISCORD_CLIENT_ID;
const guildId = process.env.DISCORD_GUILD_ID;

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "ai",
    description: "Interact with the AI bot",
    options: [
      {
        name: "message",
        type: 3, // STRING
        description: "The message to send to the AI",
        required: true,
      },
    ],
  },
];

console.log(token, clientId, guildId);

const rest = new REST({ version: "10" }).setToken(token);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
