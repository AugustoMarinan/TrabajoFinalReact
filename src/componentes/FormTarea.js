import React, { useState } from 'react';

const FormTarea = ({ onAgregarTarea }) => {
    const [nombreTarea, setNombreTarea] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setNombreTarea(e.target.value);
        setError(''); // Limpiar el mensaje de error al cambiar el contenido del campo
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verificar si el campo está vacío
        if (nombreTarea.trim() === '') {
            setError('Por favor, ingresa el nombre de la tarea, el campo no puede estar vacio');
            return;
        }

        // Agregar la tarea solo si el campo no está vacío
        onAgregarTarea(nombreTarea);
        setNombreTarea('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Ingrese la tarea a realizar</span>
                <input
                    type="text"
                    value={nombreTarea}
                    onChange={handleInputChange}
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder=""
                    style={{ marginRight: '5px' }}
                />
            </div>
            <button type="submit" className="btn btn-dark">Agregar Tarea</button>
            {error && <p style={{ color: 'red', marginTop: '5px' }}>{error}</p>}
        </form>
    );
};

export default FormTarea;

