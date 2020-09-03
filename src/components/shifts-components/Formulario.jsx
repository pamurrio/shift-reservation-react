import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    // Crear State de Citas
    const [cita, actualizarCita] = useState({
        name: '',
        lastname: '',
        fecha: '',
        hora: '',
        description: ''
    });
    const [ error, actualizarError ] = useState(false)

    // Función que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value 
        })
    }

    // Extraer los valores
    const { name, lastname, fecha, hora, description } = cita;

    // Cuando el usuario presiona agregar cita
    const submitCita = e => {
        e.preventDefault();

        // Validar
        if(name.trim() === '' || lastname.trim() === ''  || fecha.trim() === ''  || hora.trim() === ''  || description.trim() === '' ){
            actualizarError(true);
            return;
        }
        // Eliminar el mensaje previo 
        actualizarError(false);

        // Asignar un ID
        cita.id = uuid();

        // Crear la cita
        crearCita(cita);

        // Reiniciar el form
        actualizarCita({
            name: '',
            lastname: '',
            fecha: '',
            hora: '',
            description: ''
        })
    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            { error ? <p className="alerta-error">Todos los campos son obligatorios</p>     : null }

            <form
                onSubmit={submitCita}
            >
                <label>Nombre</label>
                <input 
                    type="text"
                    name="name"
                    className="u-full-width"
                    placeholder="Nombre"
                    onChange={actualizarState}
                    value={name}
                />

                <label>Apellido</label>
                <input 
                    type="text"
                    name="lastname"
                    className="u-full-width"
                    placeholder="Apellido"
                    onChange={actualizarState}
                    value={lastname}
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Información Adicional</label>
                <textarea
                    className="u-full-width"
                    name="description"
                    onChange={actualizarState}
                    value={description}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
 
export default Formulario;