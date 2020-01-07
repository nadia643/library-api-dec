const express = require('express');
const userController = require('./controllers/user');
const artistController = require('./controllers/artist');
const albumController = require('./controllers/album');
const songController = require('./controllers/song');

const app = express();
app.use(express.json());

// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Hello World!' });
// });


app.post('/users', userController.create);
app.post('/artist', artistController.create);
app.get('/artists', artistController.list);
app.get('/artists/:id', artistController.find);
app.patch('/artists/:id', artistController.update);
app.delete('/artists/:id', artistController.delete);
app.post('/artists/:id/albums', albumController.create);
app.get('/albums', albumController.list);
app.get('/albums/:id', albumController.find);
app.patch('/albums/:id', albumController.update);
app.delete('/albums/:id', albumController.delete);
app.post('/album/:albumId/song', songController.create);

module.exports = app;
