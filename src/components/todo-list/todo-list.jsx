import React, { useState } from 'react';
import TaskForm from '../task-form/task-form';
import './todo-list.css';

function ToDoList() {
  return (
    <>
      <TaskForm />
      <div className="todo-list-container">
        Lista de tareas
      </div>
    </>
  );
}

export default ToDoList;
