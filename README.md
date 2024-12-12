# Discord Bot con Gemini AI 🤖

Este bot de Discord integra las capacidades de Gemini AI de Google para proporcionar respuestas inteligentes y generación de contenido en tu servidor de Discord.

## Características ✨

- Integración completa con Gemini AI
- Comandos personalizables para interactuar con la IA
- Soporte para generación de texto
- Fácil configuración y despliegue

## Requisitos Previos 📋

- Node.js v16.9.0 o superior
- Una cuenta de Discord Developer
- Una API key de Google Cloud (para Gemini AI)
- npm o yarn

## Instalación 🛠️

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/discord-gemini-bot
cd discord-gemini-bot
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env
```

Edita el archivo `.env` con tus credenciales:
```
DISCORD_TOKEN=tu_token_de_discord
GEMINI_API_KEY=tu_api_key_de_gemini
```

## Configuración ⚙️

1. Crea una aplicación en el [Portal de Desarrolladores de Discord](https://discord.com/developers/applications)
2. Genera un token de bot y añádelo a tu archivo `.env`
3. Configura tu proyecto en [Google Cloud Console](https://console.cloud.google.com)
4. Habilita la API de Gemini y genera una API key

## Uso 💻

1. Inicia el bot:
```bash
npm start
```

2. Invita el bot a tu servidor usando el enlace de OAuth2 generado en el Portal de Desarrolladores de Discord

3. Uso:
```
ai <mensaje>
```

## Enlaces Útiles 🔗

- [Documentación de discord.js](https://discord.js.org/)
- [Documentación de Gemini AI](https://ai.google.dev/docs)
- [Guía de Discord Developer Portal](https://discord.com/developers/docs)
- [Google Cloud Console](https://console.cloud.google.com)

## Contribuir 🤝

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

1. Fork el repositorio
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles

## Autor ✒️

* **Tu Nombre** - *Trabajo Inicial* - [TuUsuario](https://github.com/tu-usuario)

---
⌨️ con ❤️ por [tu-usuario](https://github.com/tu-usuario)
