import logo from './img/AlphaTeamDev-sm.png';
import './App.css';
import Task from './components/task/task';

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={ logo } />
      </div>
      <div className="todolist-container">
        <h1> Mis Tareas </h1>
        <Task text="Aprender React"/>
      </div>
    </div>
  );
}

export default App;
