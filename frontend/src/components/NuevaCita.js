import React, { Fragment , useState} from 'react';
import { Link } from 'react-router-dom';
import clienteAxios from '../config/axios';

const NuevaCita = (props) => {

    const [cita, guardarCita] = useState({
        nombre: '',
        propietario: '',
        telefono: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const actualizarState = e => {
        guardarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    const crearNuevaCita = e =>{
        e.preventDefault();
        clienteAxios.post('/pacientes', cita)
            .then(respuesta => {
                console.log(respuesta);
                props.history.push('/');
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <Fragment>
            <h1 className='my-5'>Crear nueva cita</h1>
            <div className='container mt-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5 d-flex justify-content-center'>
                        <Link to={'/'} className='btn btn-success text-uppercase py-2 px-5 font-weight-bold'>
                            Volver
                        </Link>
                    </div>
                    <div className='col-md-8 mx-auto'>
                        <form className="bg-white p-5 bordered" onSubmit={crearNuevaCita}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre Mascota</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="nombre"
                                    name="nombre"
                                    placeholder="Nombre Mascota"
                                    onChange={actualizarState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="propietario">Nombre Propietario</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="propietario"
                                    name="propietario"
                                    placeholder="Nombre Propietario"
                                    onChange={actualizarState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="telefono">Teléfono</label>
                                <input
                                    type="tel"
                                    className="form-control form-control-lg"
                                    id="telefono"
                                    name="telefono"
                                    placeholder="Teléfono"
                                    onChange={actualizarState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="fecha">Fecha Alta</label>
                                <input
                                    type="date"
                                    className="form-control form-control-lg"
                                    id="fecha"
                                    name="fecha"
                                    onChange={actualizarState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="hora">Hora Alta</label>
                                <input
                                    type="time"
                                    className="form-control form-control-lg"
                                    id="hora"
                                    name="hora"
                                    onChange={actualizarState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="sintomas">Síntomas</label>
                                <textarea
                                    className="form-control"
                                    name="sintomas"
                                    rows="6"
                                    onChange={actualizarState}
                                ></textarea>
                            </div>


                            <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Crear Cita" />
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default NuevaCita;