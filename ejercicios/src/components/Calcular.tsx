import React, { useState } from "react";
interface Props {}

 export  const Calcular: React.FC<Props> = () => {
  const [lado, setLado] = useState<number>(0);
  const [area, setArea] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLado(Number(event.target.value));
  };

  const calcularArea = () => {
    setArea(lado * lado);
  };

  return (
    <div>
      <input type="number" value={lado} onChange={handleInputChange} />
      <button onClick={calcularArea}>Calcular área</button>
      <p>El área del cuadrado es: {area}</p>
    </div>
  );
};


