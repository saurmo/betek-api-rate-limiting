import express from "express";
import { readFile } from "fs";
import limiter from "./middleware/rate-limit.js";

const app = express();

// Aplicar el middleware a todas las rutas
app.use(limiter);

/**
 * Endpoint de ejemplo que simula una tarea intensiva
 * - Cargando todo el contenido en memoria con readFile
 * - Si el archivo es muy grande, puede llegar a bloquear el servidor "out of memory"
 */
app.get("/books/:name", (req, res) => {
  const date = new Date();
  const bookName = req.params.name;
  readFile(`docs/${bookName}.pdf`, "utf8", (err, data) => {
    if (err) {
      res.send("Error al leer el archivo");
    } else {
      const time = new Date() - date;
      const mbSize = Math.round(data.length / 1024 / 1024);
      res.send(`Tarea realizada en ${time} ms, archivo de ${mbSize} MB`);
    }
  });
});

app.get("/", (req, res) => res.send("Bienvenido a la API!"));

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
