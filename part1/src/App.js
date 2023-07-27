import './App.css';
import Mensaje from './Mensaje';


function App() {
  return (
    <div className="App">
      <div className="chat">
        <Mensaje msg={"Hola a tol mundo"} />
        <Mensaje msg={"Como estan los maquinas"} />
        <Mensaje msg={"Todo bien?"} />
      </div>
    </div>
  );
}

export default App;
