import React, { useState } from 'react';
import './task-form.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {
  const [input, setInput] = useState('');

  const typeTask = (event) => {
    setInput(event.target.value);
  };

  const send = (event) => {
    event.preventDefault(); // Evita la carga de la página cuando se envía en form
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false,
    }
    props.onSubmit(newTask);
  };

  return (
    <form className="task-form" onSubmit={ send }>
      <input type="text" className="task-input" placeholder="Escriba una tarea" name="text" onChange={typeTask} />
      <button className="task-button">
        Agregar tarea
      </button>
    </form>
  );
}

export default TaskForm;
