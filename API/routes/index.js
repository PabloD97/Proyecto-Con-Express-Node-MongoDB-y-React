const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');

module.exports = function(){ 

    // Obtener todos los registros de pacientes en la db
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    )


    // Agrega nuevos pacientes via POST
    router.post('/pacientes', 
        pacienteController.nuevoCliente
    )

    return router;
}