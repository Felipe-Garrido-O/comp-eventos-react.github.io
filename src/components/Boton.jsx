import React from 'react';

export const Boton = ({habilitado}) => {
  return (
    <button className="btn btn-dark mt-3" type="submit" disabled ={!habilitado}>Enviar</button>

  );
}
export default Boton;

