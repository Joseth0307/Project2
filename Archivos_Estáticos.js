const express = require("express");
const app = express();

// Servir archivos estáticos desde el directorio 'public'
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});