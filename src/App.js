import logo from './img/AlphaTeamDev-sm.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={ logo } />
      </div>
      <div className="todolist-container">
        <h1> Mis Tareas </h1>
      </div>
    </div>
  );
}

export default App;
