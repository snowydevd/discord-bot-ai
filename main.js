require("dotenv").config();
const discordToken = process.env.DISCORD_TOKEN;
const geminiApiKey = process.env.GEMINI_API_KEY;

const {Client, GatewayIntentBits} = require("discord.js");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(geminiApiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

// Create a chat session
const chat = model.startChat({
    history: [
        {
            role: "user",
            parts: [{ text: "Solo tienes permitido hablar en español, da respuestas concretas y simples. Tienes permitido usar emojis de discord, osea :nombre_emoji:, no hace falta que los uses en todos los mensajes pero si puedes usarlos" }]
        },
       
    ]
});


// Crear cliente de Discord con intents necesarios
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, // Para detectar eventos en servidores (guilds)
        GatewayIntentBits.GuildMessages, // Para recibir mensajes de los servidores
        GatewayIntentBits.MessageContent, // Para leer el contenido de los mensajes
        GatewayIntentBits.GuildMembers, // Para acceder a la lista de miembros
    ],
});


// Responder cuando el bot esté listo
client.once('ready', () => {
    console.log(`Bot conectado como ${client.user.tag}`);
});

// Manejar mensajes en el canal
client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // Ignorar mensajes de otros bots

    if(message.content.startsWith("ai")) {
        message.reply("Hola, soy un bot de IA, puedes hablarme con ``ia <mensaje>``")
    }

    if (message.content.startsWith('ia')) {
        console.log("IA command received");
        // Store the loading message reference
        const loadingMsg = await message.reply("Generando respuesta...");
        const userMessage = message.content.replace('ia', '').trim();

        try {
            const result = await chat.sendMessage(userMessage);
            const reply = result.response.text();
            
            if (reply.length > 2000) {
                const chunks = reply.match(/[\s\S]{1,2000}/g) || [];
                // Delete the loading message before sending the chunks
                await loadingMsg.delete();
                for (const chunk of chunks) {
                    await message.reply(chunk);
                }
            } else {
                // Delete the loading message before sending the response
                await loadingMsg.delete();
                await message.reply(reply);
            }
        } catch (error) {
            // Delete the loading message in case of error too
            await loadingMsg.delete();
            message.reply("Algo salio mal, intentalo de nuevo")
            console.error('Error con la API de Gemini:', error);
            message.reply('Hubo un problema al conectar con la IA.');
        }
    }
});

// Iniciar el bot
client.login(discordToken).catch(err => {
    console.error("Error al iniciar sesión con el token:", err);
  });