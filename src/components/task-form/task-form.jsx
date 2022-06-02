import React from 'react';
import './task-form.css';

function TaskForm(props) {
  return (
    <form className="task-form">
      <input type="text" className="task-input" placeholder="Escriba una tarea" name="text"/>
      <button className="task-button">
        Agregar tarea
      </button>
    </form>
  );
}

export default TaskForm;
