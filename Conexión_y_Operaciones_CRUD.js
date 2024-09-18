const MongoClient = require("mongodb").MongoClient;

// Conectar a la base de datos
MongoClient.connect("mongodb://localhost:27017/animals", { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;

  const db = client.db("animals");

  // Leer documentos de la colección 'mammals'
  db.collection("mammals")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result); // Mostrar los resultados en la consola

      client.close(); // Cerrar la conexión
    });
});