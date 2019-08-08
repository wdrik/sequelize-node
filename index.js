const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  return res.json({ hello: 'World' });
});

app.listen(3000);

const { User } = require('./app/models');

//--> FindAll
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).send(users);
  } catch (err) {
    return res.status(400).send({ message: `Erro ao buscar o usuários!` });
  }
});

//--> findOne
app.get('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({ where: { id } });

    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).send({ message: `Erro ao buscar o usuário do id: ${id}!` });
  }
});

//--> Create
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);

    return res.status(200).send(user);
  } catch (err) {
    return res.status(400).send({ message: 'Erro ao criar novo usuário!' });
  }
});

//--> Edit
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({ where: { id } });

    if (user) {
      user.update(req.body);
    }

    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).send({ message: `Erro ao atualizar o usuário do id: ${id}!` });
  }
});

//--> Remove
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await User.destroy({ where: { id } });

    return res.status(200).send({ message: `Usuário do id: ${id} removido com sucesso!` });
  } catch (err) {
    return res.status(400).send({ message: 'Erro ao remover usuário!' });
  }
});
