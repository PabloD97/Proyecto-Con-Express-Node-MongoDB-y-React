const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');

module.exports = function(){ 

    // Obtener todos los registros de pacientes en la db
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    )

    // Obtener un paciente con dicho id
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    )

    // Agrega nuevos pacientes via POST
    router.post('/pacientes', 
        pacienteController.nuevoCliente
    )

    // ACtualizar un registro con un ID especifico
    router.put('/pacientes/:id', 
        pacienteController.actualizarPaciente
    )

    return router;
}