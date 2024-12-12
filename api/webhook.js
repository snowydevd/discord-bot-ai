export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { type, token, data } = req.body;
  
      // Verifica que sea un ping de Discord
      if (type === 1) {
        return res.status(200).json({ type: 1 });
      }
  
      // Maneja comandos slash
      if (data.name === 'hello') {
        return res.status(200).json({
          type: 4,
          data: {
            content: '¡Hola desde el bot!',
          },
        });
      }
    }
  
    res.status(404).send('No encontrado');
  }