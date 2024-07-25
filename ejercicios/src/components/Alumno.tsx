import React, { useState } from 'react';

export const Alumno: React.FC = () => {
  const [alumnos, setAlumnos] = useState([
    {
      name: "Viviana",
      edad: 19,
      calificacion: 10,
    },
    {
      name: "Wendy",
      edad: 20,
      calificacion: 8,
    },
    {
      name: "Gerson",
      edad: 18,
      calificacion: 9,
    },
  ]);
  const [promedio, setPromedio] = useState<number | null>(null);

  const calcularPromedio = () => {
    let sumaCalificaciones = 0;
    let cantidadAlumnos = alumnos.length;

    alumnos.forEach((alumno) => {
      sumaCalificaciones += alumno.calificacion;
    });

    const promedio = sumaCalificaciones / cantidadAlumnos;
    setPromedio(promedio);
  };

  const actualizarCalificacion = (index: number, nuevaCalificacion: number) => {
    const nuevosAlumnos = [...alumnos];
    nuevosAlumnos[index].calificacion = nuevaCalificacion;
    setAlumnos(nuevosAlumnos);
    calcularPromedio();
  };

  return (
    <div>
      <h1>Alumnos</h1>
      <ul>
        {alumnos.map((alumno, index) => (
          <li key={index}>
            <p>Nombre: {alumno.name}</p>
            <p>Edad: {alumno.edad}</p>
            <div>
              <label htmlFor={`calificacion-${index}`}>Calificación:</label>
              <input
                type="number"
                id={`calificacion-${index}`}
                value={alumno.calificacion}
                onChange={(event) =>
                  actualizarCalificacion(index, Number(event.target.value))
                }
              />
            </div>
          </li>
        ))}
      </ul>
      <button onClick={calcularPromedio}>Calcular promedio</button>
      {promedio !== null && <p>El promedio de calificaciones es: {promedio}</p>}
    </div>
  );
};