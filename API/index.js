const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

// Crear el servidor
const app = express();

// Habilitar cors
const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        const existe = whitelist.some(dominio => dominio === origin);
        if (existe) {
            callback(null, true)
        } else {
            callback(new Error('No permitido por CORS'))
	    }
    }
}

// de esta forma restringimos los cors
// app.use(cors(corsOptions)) 
app.use(cors());

// Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Habilitar bodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Habilitar routing
app.use('/', routes());

// puerto y arranca el servidor
app.listen(4000, () => {
    console.log('Servidor funcionando')
})