import React, { useState } from 'react';

export const Acumulador: React.FC = () => {
  const [valor, setValor] = useState(5);

  const incrementar = () => {
    setValor(valor + 5);
  };

  const disminuir = () => {
    setValor(valor - 5);
  };

  return (
    <div>
      <h1>Acumulador</h1>
      <p>Valor actual: {valor}</p>
      <button onClick={incrementar}>+5</button>
      &nbsp;
      <button onClick={disminuir}>-5</button>
    </div>
  );
};      