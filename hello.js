// Cargar el módulo HTTP
const http = require("http");

const hostname = "127.0.0.1"; // Dirección IP local
const port = 8000; // Puerto que usaremos

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  // Establecer el encabezado de respuesta HTTP
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Enviar el cuerpo de la respuesta
  res.end("Hola Mundo\n");
});

// Imprimir un mensaje cuando el servidor empiece a escuchar
server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});
