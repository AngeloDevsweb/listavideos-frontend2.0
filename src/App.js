
import './App.css';
import {  Routes, Route  } from "react-router-dom";

import Navegacion from './components/Navegacion'
import ListaVideos from './components/ListaVideos'
import Formulario from './components/Formulario'



function App() {
  return (
    <div className="App">
      <Navegacion/>
      <div className="container p-4"> 
        <Routes>
          <Route path="/" exact element={<ListaVideos/>} />
          <Route path="/CrearLista" element={<Formulario/>} />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
