// wiki.js - Módulo de rutas de Wiki

const express = require("express");
const router = express.Router();

// Ruta de la página principal
router.get("/", function (req, res) {
  res.send("Página principal del Wiki");
});

// Ruta de la página "Acerca de"
router.get("/acerca", function (req, res) {
  res.send("Acerca de este wiki");
});

module.exports = router;