const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ hello: 'World' });
});

app.listen(3000);

const { User } = require('./app/models');

User.create({ name: 'Iorgen', email: 'iorgen@rocketseat.com', password: '123456' });
