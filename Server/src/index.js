const http = require('http');
const data = require('./utils/data')

http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Verifica si la url incluye "/rickandmorty/character"
  if (req.url.includes('/rickandmorty/character')) {
    // Obtiene el id del personaje desde la url
    const id = req.url.split('/').pop();
    // Busca el personaje por id en el archivo data.js
    const character = data.find((char) => char.id === Number(id));
    // Si encuentra el personaje, envía una respuesta con un JSON que lo contenga
    if (character) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(character));
    } else {
      // Si no encuentra el personaje, envía una respuesta con un mensaje de error
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Character not found');
    }
  } else {
    // Si la url no incluye "/rickandmorty/character", envía una respuesta con un mensaje de error
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Endpoint not found');
  }
})
.listen(3001, '0.0.0.0', () => {
  console.log('Server running at http://0.0.0.0:3001/');
});