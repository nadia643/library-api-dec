const express = require('express');
const userController = require('./controllers/user');

const app = express();
app.use(express.json());

app.post('/users', userController.create);


app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

module.exports = app;
