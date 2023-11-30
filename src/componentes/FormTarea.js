import React, { useState } from 'react';

const FormTarea = ({ onAgregarTarea }) => {
    const [nombreTarea, setNombreTarea] = useState('');

    const handleInputChange = (e) => {
        setNombreTarea(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAgregarTarea(nombreTarea);
        setNombreTarea('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={nombreTarea} onChange={handleInputChange} />
            <button type="submit">Agregar Tarea</button>
        </form>
    );
};

export default FormTarea;

