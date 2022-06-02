import logo from './img/AlphaTeamDev-sm.png';
import './App.css';
import Task from './components/task/task';
import TaskForm from './components/task-form/task-form';

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={ logo } />
      </div>
      <div className="todolist-container">
        <h1> Mis Tareas </h1>
        <TaskForm />
      </div>
    </div>
  );
}

export default App;
