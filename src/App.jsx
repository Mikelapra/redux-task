//Parte 3: Crear componentes

import {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './redux/todosSlice.js';


//1. Haz que se que muestre la lista de tareas en `App.jsx`.
//2. Define las acciones necesarias para agregar una tarea y eliminar una tarea.

function App() {
  const [input, setInput] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo({
      id: Math.random(),
      text: input
    }

    ))
  };
  

  
  return (
    <>
  
      <h1>Lista de tareas</h1>
      <ul>
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={handleAddTodo}>Añadir tarea</button>
        {todos.map(todo => (
        <li key={todo.id}>{todo.text}<button onClick={() => dispatch(removeTodo(todo.id))}>Eliminar tarea</button></li>
        ))}
      </ul>
    
    </>
  );
};

export default App;
