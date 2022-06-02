import React, { useState } from 'react';
import TaskForm from '../task-form/task-form';
import Task from '../task/task';
import './todo-list.css';

function ToDoList() {
  const [tasks, setTask] = useState([]);

  const addTask = (task) => {
    if( task.text.trim() ) {
      task.text = task.text.trim();
      const tasksUpdated = [task, ...tasks];
      setTask(tasksUpdated);
    }
  }

  const deleteTask = (id) => {
    const tasks_ = tasks.filter(task => task.id !== id);
    setTask(tasks_);
  }

  return (
    <>
      <TaskForm onSubmit={ addTask } />
      <div className="todo-list-container">
        {
          tasks.map((task) =>
            <Task key={ task.id } id={ task.id } text={ task.text } completed={ task.completed } deleteTask={deleteTask}/>
          )
        }
      </div>
    </>
  );
}

export default ToDoList;
