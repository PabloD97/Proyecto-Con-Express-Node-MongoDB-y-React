const Paciente = require('../models/Paciente');

// Cuando se crea un nuevo cliente
exports.nuevoCliente = async (request, response, next)=> {
    
    // crear obj de paciente con datos de request.body
    const paciente = new Paciente(request.body);

    try {
        await paciente.save();
        response.json({mensaje: 'El cliente se agrego correctamente'});

    } catch (error) {
        console.log(error);
        next();
    }
} 