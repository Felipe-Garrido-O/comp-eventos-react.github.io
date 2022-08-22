import React from "react";
import {useState} from 'react';
import "./index.css";
import Boton from "./components/Boton";
import Input from "./components/Input";


function App() {

  const [habilitado,setHabilitado] = useState(false); 
  
  return (
    <div className="app">
    <h3>Estado de los componentes y eventos</h3>  
    <Input setHabilitado={setHabilitado} />
    <Boton habilitado={habilitado}/>
    </div>
  );
}

export default App;
