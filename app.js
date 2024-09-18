const express = require("express"); // Importar el módulo express
const app = express(); // Crear una instancia de la aplicación Express
const port = 3000; // Definir el puerto en el que escuchará la aplicación

// Definir una ruta para la URL raíz
app.get("/", function (req, res) {
  res.send("¡Hola Mundo!"); // Enviar una respuesta cuando se accede a la URL raíz
});

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(port, function () {
  console.log(`¡Ejemplo de aplicación escuchando en el puerto ${port}!`); // Imprimir un mensaje en la consola
});
const square = require("./square"); // Importar el módulo square

console.log(`El área de un cuadrado con un ancho de 4 es ${square.area(4)}`);
console.log(`El perímetro de un cuadrado con un ancho de 4 es ${square.perimeter(4)}`);
const wikiRouter = require("./wiki");
app.use("/wiki", wikiRouter);