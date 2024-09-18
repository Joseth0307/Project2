const express = require("express");
const path = require("path");
const app = express();

// Establecer el directorio de las plantillas ('views')
app.set("views", path.join(__dirname, "views"));

// Establecer el motor de vista, en este caso 'pug'
app.set("view engine", "pug");

// Ruta para renderizar una vista
app.get("/", function (req, res) {
  res.render("index", { title: "Acerca de los perros", message: "¡Los perros son geniales!" });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});