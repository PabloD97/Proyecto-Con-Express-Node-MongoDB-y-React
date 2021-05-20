const express = require('express');

// Crear el servidor
const app = express();

// puerto y arranca el servidor
app.listen(4000, ()=> {
    console.log('Servidor funcionando')
})