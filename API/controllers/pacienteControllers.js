const Paciente = require('../models/Paciente');

// Cuando se crea un nuevo cliente
exports.nuevoCliente = async (request, response, next) => {

    // crear obj de paciente con datos de request.body
    const paciente = new Paciente(request.body);

    try {
        await paciente.save();
        response.json({ mensaje: 'El cliente se agrego correctamente' });

    } catch (error) {
        console.log(error);
        next();
    }
}

exports.obtenerPacientes = async (request, response, next) => {
    try {
        const pacientes = await Paciente.find({});
        response.json(pacientes);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.obtenerPaciente = async (request, response, next) => {
    try {
        const paciente = await Paciente.findById(request.params.id);
        response.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.actualizarPaciente = async (request, response, next) => {
    try {
        const paciente = await Paciente.findOneAndUpdate(
            { _id: request.params.id },
            request.body,
            { new: true }
        )
        response.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.eliminarPaciente = async (request, response, next) => {
    try {
        const eliminado = await Paciente.findOneAndDelete({ _id: request.params.id })
        response.json(eliminado);
        response.json({ mensaje: 'El paciente fue eliminado' });
    } catch (error) {
        console.log(error);
        next();
    }
}