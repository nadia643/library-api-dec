const express = require('express');
const userController = require('./controllers/user');
const artistController = require('./controllers/artist');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});


app.post('/users', userController.create);
app.post('/artist', artistController.create);
app.get('/artists', artistController.list);
app.get('/artists/:id', artistController.find);
app.patch('/artists/:id', artistController.update);

module.exports = app;
