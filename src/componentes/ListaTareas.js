import React from 'react';
import ElementoTareas from './ElementoTarea';

const ListaTareas = ({ tareas, onCompleteTarea, onDeleteTarea }) => {
    return (
        <div>
            {tareas.map((tarea) => (
                <ElementoTareas
                    key={tarea.id}
                    tarea={tarea}
                    onCompleteTarea={onCompleteTarea}
                    onDeleteTarea={onDeleteTarea}
                />
            ))}
        </div>
    );
};

export default ListaTareas;

