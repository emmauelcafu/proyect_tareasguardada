import Home from "../src/home/home";
import { Route, Routes } from "react-router-dom";
import  GuardarTareas from "../src/view/tareas";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tareas" element={<GuardarTareas/>}/>
    </Routes>
  );
}

export default App;
