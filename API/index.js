const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// Crear el servidor
const app = express();

// Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Habilitar bodyParser
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// Habilitar routing
app.use('/', routes());

// puerto y arranca el servidor
app.listen(4000, () => {
    console.log('Servidor funcionando')
})