app.all("/secreto", function (req, res, next) {
  console.log("Accediendo a la sección secreta…");
  next(); // Pasar el control al siguiente manejador
});