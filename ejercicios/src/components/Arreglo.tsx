import React, { useState } from 'react';

interface Props {}

export const Arreglo: React.FC<Props> = () => {
  const [arreglo, setArreglo] = useState<number[]>([]);
  const [suma, setSuma] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setArreglo((prevArreglo) => [...prevArreglo, value]);
  };

  const calcularSuma = () => {
    const nuevaSuma = arreglo.reduce((acc, curr) => acc + curr, 0);
    setSuma(nuevaSuma);
  };

  return (
    <div>
      <input type="number" value={''} placeholder="Ingresa un número" onChange={handleInputChange} />
      <button onClick={calcularSuma}>Calcular suma</button>
      <p>La suma de los elementos del arreglo es: {suma}</p>
      <p>Elementos del arreglo: {arreglo.join(', ')}</p>
    </div>
  );
};


