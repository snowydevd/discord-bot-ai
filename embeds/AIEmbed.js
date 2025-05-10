const { EmbedBuilder } = require("discord.js");

class AIEmbed {
  constructor(prompt, response) {
    this.prompt = prompt;
    this.response = response;
  }

  async sendMessage() {
    return new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("Respuesta de IA")
      .setDescription(this.response)
      .addFields(
        { name: "Prompt", value: this.prompt },
        { name: "Respuesta", value: this.response }
      )
      .setTimestamp()
      .setFooter({ text: "IA Bot" });
  }
}
