const express = require("express");
const app = express();

// Middleware personalizado
const myMiddleware = function (req, res, next) {
  console.log("Middleware ejecutado");
  next(); // Llama a next() para continuar con el siguiente middleware
};

// Agregar middleware a todas las rutas
app.use(myMiddleware);

// Agregar middleware para una ruta específica
app.use("/someroute", myMiddleware);

// Middleware para un verbo HTTP específico
app.get("/", myMiddleware, (req, res) => {
  res.send("¡Hola desde la ruta raíz!");
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});