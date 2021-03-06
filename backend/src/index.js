const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path')
const cors = require('cors');

const app = express();

const server = require('http').Server(app)
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-weg70.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use((req, res, next) => {
    req.io = io;

    next();
});

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(routes);

server.listen(3002);