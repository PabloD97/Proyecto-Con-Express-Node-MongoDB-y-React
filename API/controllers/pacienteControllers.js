const { response } = require("express")


// Cuando se crea un nuevo cliente
exports.nuevoCliente = (request, response, next)=> {
    //TODO: Insertar en la db
    response.json({mensaje: 'El cliente se agrego correctamente'});
}