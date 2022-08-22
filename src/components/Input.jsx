import React from "react";
import { useState } from "react";

const Input = ({setHabilitado}) => {
    
  const [nombre, setNombre] = useState("");

  const validarInput = (e) =>{ (e.preventDefault())
      if (nombre === "" ){
      alert("Debes agregar tu nombre")
  }       
  }

  const validarBtn = (e) => {
    if (e === "252525"){
    setHabilitado(true);
    return
    }
    setHabilitado(false);
  } 

    return (
        <form onSubmit={validarInput}>
        <div className="form-group">   
    <label>Nombre</label>      
    <input type="text" className="form-control" name="nombre" onChange={(e) => setNombre(e.target.value)}/>
    </div>
    <div className="form-group">
    <label>Contraseña</label>
    <input type="text" className="form-control" name="password" onChange={(e) => validarBtn(e.target.value)}/>
    </div>
    </form>
    )
    }
    export default Input;