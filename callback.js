function operacionAsincrona(callback) {
  setTimeout(function () {
    callback("Resultado");
  }, 1000);
}

operacionAsincrona(function(resultado) {
  console.log(resultado); // Imprimirá "Resultado" después de 1 segundo
});
