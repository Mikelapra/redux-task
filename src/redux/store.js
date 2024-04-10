// Parte 1: Configuración inicial

//3. importa las dependencias necesarias para trabajar con Redux.

import { configureStore } from '@reduxjs/toolkit';


import todosReducer from './todosSlice';

// 4. Crea un estado inicial para la lista de tareas.
// 5. Define una función `reducer` que actualice el estado en función de las acciones recibidas.

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});