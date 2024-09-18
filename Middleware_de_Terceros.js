const express = require("express");
const logger = require("morgan");
const app = express();

app.use(logger("dev")); // Agregar el middleware de morgan para registrar solicitudes