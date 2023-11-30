import React, { useState, useEffect } from 'react';
import ListaTareas from './componentes/ListaTareas';
import FormTarea from './componentes/FormTarea';
import './App.css';

const App = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    // Efecto de Actualización
    console.log('Tareas actualizadas:', tareas);
    // Puedes implementar la persistencia de datos aquí usando localStorage
  }, [tareas]);

  const handleCompletarTarea = (tareaId) => {
    setTareas((tareasAnteriores) =>
      tareasAnteriores.map((tarea) =>
        tarea.id === tareaId ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const handleEliminarTarea = (tareaId) => {
    setTareas((tareasAnteriores) => tareasAnteriores.filter((tarea) => tarea.id !== tareaId));
  };

  const handleAgregarTarea = (nombreTarea) => {
    const nuevaTarea = { id: tareas.length + 1, nombre: nombreTarea, completada: false };
    setTareas((tareasAnteriores) => [...tareasAnteriores, nuevaTarea]);
  };

  return (
    <div className="App">
      <h1>Gestor de Tareas</h1>
      <FormTarea onAgregarTarea={handleAgregarTarea} />
      <ListaTareas
        tareas={tareas}
        onCompleteTarea={handleCompletarTarea}
        onDeleteTarea={handleEliminarTarea}
      />
    </div>
  );
};

export default App;
