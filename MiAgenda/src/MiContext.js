import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const MiContext = ({ children }) => {
  
  const [data, setData] = useState([
    { id: 1,
      titulo : 'Saltar la cuerda',
      descripcion: 'Saltar esta tarde la cuerda en mi casa',
      fecha: new Date(2023, 5, 15),
      tipo: 'recordatorio',
      estado: 'En progreso'},
    { id: 2,
      titulo : 'Hacer ejercicio',
      descripcion: 'Tengo que hacer ejercicio',
      fecha: new Date(2023, 5, 15),
      tipo: 'tarea',
      estado: 'En progreso'},
   { id: 3,
      titulo : 'Trabajar en la tesis',
      descripcion: 'Quedarme a hacer la tesis el finde y no salir :)',
      fecha: new Date(2023, 5, 15),
      tipo: 'actividad',
      estado: 'En progreso'},

  ]);

  

  const removeElement = (element) => {  
    const newArray = data.filter((item) => item !== element);
    setData(newArray)
  };

  const AddElement = (elemento) => {
    setData([...data, elemento]);
  };

  const EditElement = (id,nuevo) => {
    setData((data) =>
      data.map((elemento) =>
        elemento.id === id ? { ...elemento, estado: "Completado" } : elemento
      )
    );
  };

  return (
    <AppContext.Provider value={{data,setData,removeElement,AddElement,EditElement }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
