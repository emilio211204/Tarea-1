import React, { useState } from 'react';

export const DividirValores: React.FC = () => {
  const [arreglo, setArreglo] = useState<number[]>([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
  const [nuevoArreglo, setNuevoArreglo] = useState<number[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.split(",").map(Number);
    setArreglo(value);
  };

  const dividirPorCinco = () => {
    const nuevoArreglo = arreglo.map((numero) => numero / 5);
    setNuevoArreglo(nuevoArreglo);
  };

  return (
    <div>
      <input type="text" value={arreglo.join(",")} placeholder="Ingresa los valores del arreglo separados por comas" onChange={handleInputChange} />
      <button onClick={dividirPorCinco}>Dividir por 5</button>
      <p>Nuevo arreglo: {nuevoArreglo.join(", ")}</p>
    </div>
  );
};
