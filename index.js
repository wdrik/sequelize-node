const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ hello: 'World' });
});

app.listen(3000);

const { User } = require('./app/models');

app.get('/users', (req, res) => {}); //Listar todos
app.post('/users', (req, res) => {}); // Criar
app.get('/users/:id', (req, res) => {}); //Buscar
app.put('/users/:id', (req, res) => {}); //Editar
app.delete('/users/:id', (req, res) => {}); //Deletar

app.post('/register', async (req, res) => {
  console.log(req.body);
  return;
  const user = await User.create(req.body);

  res.json(user);
});

// User.create({ name: 'Iorgen', email: 'iorgen@rocketseat.com', password: '123456' });
