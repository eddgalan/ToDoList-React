import React, { useState } from 'react';
import TaskForm from '../task-form/task-form';
import Task from '../task/task';
import './todo-list.css';

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if( task.text.trim() ) {
      task.text = task.text.trim();
      const tasksUpdated = [task, ...tasks];
      setTasks(tasksUpdated);
    }
  };

  const deleteTask = (id) => {
    const tasks_ = tasks.filter(task => task.id !== id);
    setTasks(tasks_);
  };

  const completeTask = (id) => {
    const tasks_ = tasks.map(task => {
      if( task.id === id ) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(tasks_);
  };

  return (
    <>
      <TaskForm onSubmit={ addTask } />
      <div className="todo-list-container">
        {
          tasks.map((task) =>
            <Task key={ task.id } id={ task.id } text={ task.text } completed={ task.completed }
              deleteTask={deleteTask} completeTask={completeTask} />
          )
        }
      </div>
    </>
  );
}

export default ToDoList;
