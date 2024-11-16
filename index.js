import express from 'express';
// import limiter from './src/middlewares/rate-limit.js';

const app = express();

// Aplicar el middleware a todas las rutas
// app.use(limiter);


// Endpoint de ejemplo que simula una tarea intensiva
app.get('/heavy-operation', (req, res) => {
  // Simula una operación intensiva
  const date = new Date();
  for (let i = 0; i < 1e7; i++) {} // Bucle para simular carga de CPU
  const time = new Date() - date;
  res.send(`Tarea intensiva realizada en ${time} ms`);
});

app.get('/', (req, res) => {
  res.send('Bienvenido a la API!');
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});