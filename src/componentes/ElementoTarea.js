import React, { useState } from 'react';

const ElementoTareas = ({ tarea, onCompleteTarea, onDeleteTarea }) => {
    const [completada, setCompletada] = useState(tarea.completada);

    const handleCompletar = () => {
        setCompletada(!completada);
        onCompleteTarea(tarea.id);
    };

    const handleEliminar = () => {
        onDeleteTarea(tarea.id);
    };

    return (
        <div style={{ textDecoration: completada ? 'line-through' : 'none' }}>
            {tarea.nombre}
            <button onClick={handleCompletar}>Completar</button>
            <button onClick={handleEliminar}>Eliminar</button>
        </div>
    );
};

export default ElementoTareas;
