// Parte 2: Crear acciones

import { createSlice } from '@reduxjs/toolkit';


// 2. Define las acciones necesarias para agregar una tarea y eliminar una tarea.
const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
        return state.filter(todo => todo.id !== action.payload);
    },
  },
});

//3. Exporta las acciones para poder utilizarlas en otros archivos.

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;